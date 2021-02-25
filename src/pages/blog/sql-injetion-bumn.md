---
title: SQL Injection at Subdomain bumn.go.id
date: 2020-10-02
---

Halo, kali ini saya ingin membagikan write up bug SQL Injection di Subdomain bumn.go.id, langsung aja ya

___

Seperti biasa saya melakukan scan Subdomain di website [api.hackertarget.com](https://api.hackertarget.com)
![](https://buayalaut.co/files/bumn/photo_2021-02-25_16-58-28.jpg)

## Point Inject

Point inject berada di kolom Provinsi, Kab/kota
![](https://buayalaut.co/files/bumn/2021-02-25 17_09_50-Greenshot.png)

Berikut request URL dan Post data nya
![](https://buayalaut.co/files/bumn/2021-02-25 17_14_27-Greenshot.png)
