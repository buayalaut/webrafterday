---
title: SQL Injection at Subdomain sidomuncul.co.id
date: 2021-02-26
---

![](https://competent-cori-57d622.netlify.app/sidomuncul/Screenshot_20.png)
Halo, kali ini saya ingin menulis write up SQL Injection di subdomain website sidomuncul.co.id

*Sido Muncul adalah produsen jamu dan obat herbal modern dengan pangsa pasar terbesar di Indonesia. Sido Muncul adalah produsen Tolak Angin*

___

Vulnerability terletak pada page registrasi
![](https://competent-cori-57d622.netlify.app/sidomuncul/Screenshot_21.png)

Tepatnya pada kolom provinsi
![](https://competent-cori-57d622.netlify.app/sidomuncul/Screenshot_23.png)

Berikut request url yang saya dapatkan setelah mencoba untuk merekam request headers yang berjalan
![](https://competent-cori-57d622.netlify.app/sidomuncul/Screenshot_22.png)

___

Berikut database yang saya dapatkan ketika melakukan scan di SQL Map
![](https://competent-cori-57d622.netlify.app/sidomuncul/Screenshot_24.png)

Dan users nya adalah
![](https://competent-cori-57d622.netlify.app/sidomuncul/Screenshot_25.png)

___

Timeline report

- 27 Februari mengirimkan laporan ke email info@sidomuncul.co.id


