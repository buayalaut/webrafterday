---
title: SQL Injection at Subdomain dominos.co.id - Hall Of Fame
date: 2020-02-03
---

![](https://buayalaut.co/files/Screenshot_109.png)

Halo, kali ini saya akan membagikan write up sederhana SQL Injection di [bi.dominos.co.id](https://bi.dominos.co.id) tepatnya pada form login
Reward dari penemuan ini adalah saya mendapatkan Hall Of Fame di [dominos.responsibledisclosure.com](https://dominos.responsibledisclosure.com/hc/en-us/articles/360001378594-Acknowledgments)
(Dandy Rafliansyah)

Penemuan ini awalnya saya iseng-iseng mengunjungi domain utamanya, lalu saya berpikir "mengapa tidak mencari BUG nya saja?" nah awalnya saya mencari BUG di domain utamanya, namun tidak menandakan adanya vulnerability hahaha

Oke next, maka dari itu saya berpikir untuk melakukan scan subdomainnya, dan akhirnya dapatlah subdo bi.dominos.co.id

___

Pada bi.dominos.co.id menampilkan form login, saya berpikir lagi "ah sepertinya tidak vuln", lalu saya mencoba memasukkan single quote pada kolom username dan password guna untuk mengecek apakah vuln atau tidak...

Dan ketika saya klik Sign In maka saya di arahkan/redirect ke dashboard. TAPI, langsung di redirect lagi ke form login. seperti ini gambarannya
![](https://p19.zdusercontent.com/attachment/1763264/KHeFWOD2uqd4JAjogduLUiXkZ?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.._ZKcj2j8B0EK53uVduxwmA.q_Knwp1EQavNIIB6LLu_5FXy_nVp-XWShdy-pM7obTFPsw0Mxc5cWt7ylcXzM8kQsvPmZFnmrxCDIfF_NQUXOLpeLtwMfIG-Q88jpoIYshpBFVEPChILdtPEQO0nQWTiSSFbLX42n_kdabD7EuZxX31kUS-GSgAS77sZydIotdJUbYEctOkz0Vw7xMI51RcEBpr_xUKMwnNKjd3hEcv_5EBZcjSOeLY6O3lN8kmbOavPy2ycKJJbaUxBUvEVrlFOeu2WuHbvtSH4jjqL-FIqOHC672d1udz5Na_UrEVEtvU.A5s_ScxisDeKTdS3KgxNDQ)

Lalu ketika saya menambahkan string balance, web tidak redirect ke page dashboard dan menampilkan "Invalid Username & Password"
![](https://p19.zdusercontent.com/attachment/1763264/LpjYdJEmX3WhdcboOv7XKZ2M5?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..J9pUFJEJZUIOq4T42YA1dQ.6VaT3MMtZTLU5bvFt4-8gU16M-74_ppkjSYnvyen2KDCuYxI4FnidqWwiTh-MeOHlocXZLL1B7LxSCYIlW08gnp2cZ1K3Ziy3Sg48zCPTKBQoFBOb5L6p3zalMtzoacXyF1N9ZfLOpLPIHbSEwhsM8pbWLAwpiKsJFd6L5ySoI8fBaBjeKpZKfB3m_ZYEe6JUt0qBlQEWuuVNpLbwEwky-FtzwqrJFgjYeWtcNDWwcnNs2CYws7Us6GVSqoIl3Cnq0yyv-l--219r_OSksgOgk8LC0KBUqmZndLZQC8TeoQ.EaJ8G9yl0OCSSAs12y4y9w)

Saya semakin yakin bahwa ini vulnerability terhadap SQL Injection, sebab ketika saya menginjeksikan menggunakan payload balance, tidak error atau tidak redirect

___

Lanjut, saya lalu mencari request URL dan post datanya terlebih dahulu sebelum melakukan scan di SQLMap.
Saya membuka Inspect Element di Chrome lalu ke bagian Network, guna merekam semua request headers web yang sedang saya buka, berikut post data nya
![](https://p19.zdusercontent.com/attachment/1763264/bseUey3UgLUUswUMLtmhaPHDl?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..xspUVfHnkvVAQgn2SNNnWA.b3NgyH9cov8FbYOq9DbLol0PbvHZr0b1y_w6bQRImRmv2dVMqiiRdy-d9X2rB3Apb_2pGwLc1nB-xW8ztkXG84CvnEBRPWa50ixrnnfi_DogY0g-41ATQgozFKwmVYVlvIRtrW3nhwPAHTJM0FXrg6QJzbWx0x4mnsfUmrL3sR7V2uyRb82Qs2pdmqNfyhdFrGWDRDLD-kR99u0zKpNR6gTSEO-YHCkUyFAmYx2S7z536QdZpa_64JhyQxM-mU-K7WcxFKsVGIP6GsKuS3MEZQcuzk_P9hPWUJ6_8Lvpk3I.4b1xVs9NTpq0h5F_cMdFEw)

___

Lalu saya melakukan scan di SQL Map dengan command

```
sqlmap -u https://bi.dominos.co.id/login/index.php --data="uname=12&psw=12&appUri=/p/7639/" --level=3 --risk=3 --dbs
```

Hasil dari scannya adalah
