---
title: SQL Injection at Subdomain sidomuncul.co.id
date: 2021-02-26
---

![](https://cdn.buayalaut.co/sidomuncul/Screenshot_20.png)
Halo, kali ini saya ingin menulis write up SQL Injection di subdomain website sidomuncul.co.id

*Sido Muncul adalah produsen jamu dan obat herbal modern dengan pangsa pasar terbesar di Indonesia. Sido Muncul adalah produsen Tolak Angin*

___

Vulnerability terletak pada page registrasi
![](https://cdn.buayalaut.co/sidomuncul/Screenshot_21.png)

Tepatnya pada kolom provinsi
![](https://cdn.buayalaut.co/sidomuncul/Screenshot_23.png)

Berikut request url yang saya dapatkan setelah mencoba untuk merekam request headers yang berjalan
![](https://cdn.buayalaut.co/sidomuncul/Screenshot_22.png)

___

Berikut database yang saya dapatkan ketika melakukan scan di SQL Map
![](https://cdn.buayalaut.co/sidomuncul/000015.png)

Dan users nya adalah
![](https://cdn.buayalaut.co/sidomuncul/000016.png)

___

Timeline report

- 27 Februari mengirimkan laporan ke email info@sidomuncul.co.id


