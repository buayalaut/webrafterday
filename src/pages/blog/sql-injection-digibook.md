---
title: SQL Injection at digibook.id - BUG Fixed by Developer
date: 2021-03-31
---

![](https://cdn.buayalaut.co/digibook/Screenshot_11.png)

Halo,

Kali ini saya ingin menulis write up SQL Injection di website digibook.id

apasih digibook itu? 
Digibook Promotion adalah sebuah tempat dimana kamu bisa merealisasikan imajinasimu dengan barang-barang promosi terkini dan uptodate. Kami menawarkan platform online untuk memenuhi segala kebutuhan promosi kamu, baik untuk kebutuhan branding, merchandise, printing dan jasa digital marketing. - *Dikutip dari [https://digibook.id/tentang/](https://digibook.id/tentang/)*

___

Sebelumnya saya sudah melakukan register di website digibook.id, dan saya mencoba untuk menambahkan produk ke dalam keranjang belanja saya, maka akan seperti ini
![](https://cdn.buayalaut.co/digibook/Screenshot_12.png)

Lalu saya mencoba menghapusnya dengan click pada icon trash, maka menampilkan halaman konfirmasi untuk menghapus produk tersebut dari daftar keranjang
![](https://cdn.buayalaut.co/digibook/Screenshot_13.png)

Saya melihat ada parameter ?hps= pada URL, maka saya mencoba untuk menambahkan single quote pada parameter tersebut, guna untuk memastikan apakah vulnerable SQL Injection atau tidak. maka respons nya adalah
![](https://cdn.buayalaut.co/digibook/Screenshot_14.png)

Benar saja dugaan saya, ternyata respons nya adalah error SQL Syntax, menandakan adanya kesalahan dalam sql syntax nya

___

Selanjutnya saya mencoba melakukan inject secara manual dengan menggunakan hackbar pada browser cyberfox saya.

Saya mendapatkan error di order by 12
![](https://cdn.buayalaut.co/digibook/Screenshot_15.png)

Berikut user yang saya dapatkan
![](https://cdn.buayalaut.co/digibook/Screenshot_17.png)

Dan tablenya
![](https://cdn.buayalaut.co/digibook/Screenshot_18.png)

Dan column nya
![](https://cdn.buayalaut.co/digibook/Screenshot_19.png)

Dan datanya pada column
![](https://cdn.buayalaut.co/digibook/000013.png)

___

Timeline report

- 31 Maret 2021 mendapatkan respons
![](https://cdn.buayalaut.co/digibook/IMG_20210404_114849.jpg)

- BUG Fixed by Developer
![](https://cdn.buayalaut.co/digibook/Screenshot_29.png)


