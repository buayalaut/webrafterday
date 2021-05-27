---
title: SQL Injection at Subdomain gramedia.com
date: 2020-07-28
---

Halo semuanya, Kali ini saya ingin share write up SQL Injection di subdomain gramedia.com, tepatnya berada di bukusekolah.gramedia.com

Penemuan ini awalnya bermula dari saya iseng - iseng melakukan recon subdomain dan mendapatkan sub bukusekolah.gramedia.com
lalu saya ke page register
![](https://cdn.buayalaut.co/files/Screenshot_90.png)

Ketika saya ingin melakukan register, saya tertarik pada kolom select Provinsi. karena ketika saya memilih provinsi A maka di kolom Kabupaten/Kota menampilkan data - data yang sesuai dengan di kolom A, seperti ini
![](https://cdn.buayalaut.co/files/Screenshot_91.png)

Lalu saya membuka menu Network pada Inspect Element guna merekam semua request headers yang sedang saya buka, dan saya sudah mendapatkan request url dan post data nya
![](https://cdn.buayalaut.co/files/Screenshot_92.png)

___

Selanjutnya saya melakukan cek di hackbar pada mozilla/cyberfox, maka respons nya adalah
![](https://cdn.buayalaut.co/files/Screenshot_93.png)

Lalu saya coba cek dengan menambahkan single quote pada parameter provinsi=, respons nya data-data yang sebelumnya hilang
![](https://cdn.buayalaut.co/files/Screenshot_94.png)

Lalu saya coba menambahkan string balance -- -, guna memeriksa lebih lanjut apakah vulnerable terhadap SQLi atau tidak, respons nya adalah sama seperti tadi menambahkan single quote.

Lalu karena saya pantang menyerah, maka saya mencoba merubah single quote menjadi double quote. maka respons webnya adalah menjadi blank page, Damn!
![](https://cdn.buayalaut.co/files/Screenshot_97.png)

dan setelah itu saya mencoba menambahkan string balance lagi, ternyata responsnya menampilkan data - data normal
![](https://cdn.buayalaut.co/files/Screenshot_98.png)

Nah disini saya bisa menyimpulkan bahwa ini vulnerable terhadap SQLi (tidak semua vuln, tetapi kemungkinan iya)

___

Selanjutnya saya mencoba melakukan scanning di SQLMap, dan hasilnya adalah saya mendapatkan 8 Database dari website tersebut
![](https://cdn.buayalaut.co/files/Screenshot_95.png)

Dan saya juga mendapatkan 6 Users dari website tersebut
![](https://cdn.buayalaut.co/files/Screenshot_96.png)

___

Timeline Report

* 12 Oktober 2020 Mengirimkan laporan ke email customercare@gramedia.com = Mendapat balasan lalu disuruh mengirimkan laporan ke email cs@gramediaprinting.com

* 12 Oktober 2020 Mengirimkan laporan ke email cs@gramediaprinting.com = No respons

* 26 Januari 2021 Mengirimkan laporan ke email cs@gramediaprinting.com untuk kedua kalinya, tetap tidak ada respons



