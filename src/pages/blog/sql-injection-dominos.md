---
title: SQL Injection at Subdomain dominos.co.id - Hall Of Fame
date: 2021-02-03
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
![](https://buayalaut.co/files/dominos1.png)

Lalu ketika saya menambahkan string balance, web tidak redirect ke page dashboard dan menampilkan "Invalid Username & Password"
![](https://buayalaut.co/files/dominos2.png)

Saya semakin yakin bahwa ini vulnerability terhadap SQL Injection, sebab ketika saya menginjeksikan menggunakan payload balance, tidak error atau tidak redirect

___

Lanjut, saya lalu mencari request URL dan post datanya terlebih dahulu sebelum melakukan scan di SQLMap.
Saya membuka Inspect Element di Chrome lalu ke bagian Network, guna merekam semua request headers web yang sedang saya buka, berikut post data nya
![](https://buayalaut.co/files/dominos3.png)

___

Lalu saya melakukan scan di SQL Map dengan command

```
sqlmap -u https://bi.dominos.co.id/login/index.php --data="uname=12&psw=12&appUri=/p/7639/" --level=3 --risk=3 --dbs
```

Hasil dari scannya adalah
