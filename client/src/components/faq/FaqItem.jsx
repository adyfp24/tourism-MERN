import React from "react";
import FaQQuestion from "./FaqQuestion";

const FaQItem = () => {
    return (
      <div className="w-full sm:p-10">
        <FaQQuestion
          question="Apakah di masa liburan tiket Jatim Park tambah mahal?"
          answer="Untuk segala administrasi termasuk mengenai harga tiket bergantung pada penyelenggara wisata. Namun, untuk saat ini harga tiket masuk Jatim Park tetap di harga Rp80.000,00/orang."
        />
        <FaQQuestion
          question="Apakah sekarang sudah aman untuk pendakian Gunung Semeru?"
          answer="Pendakian Gunung Semeru telah dibuka sejak tanggal 19 September 2023 dan sudah dipastikan untuk pemadaman dan memastikan kondisi kawasan pendakian telah aman"
        />
        <FaQQuestion
          question="Apakah di Santera menyediakan kolam renang?"
          answer="Iya. Selain itu, Santera juga menyediakan berbagai fasilitas, seperti virtual reality, trampolin, house of terror, sepatu roda, ontang anting, istana balon, komedi putar, cinema 7D, bumper car, playground, dan lainnya."
        />
        <FaQQuestion
          question="Apakah boleh membawa makanan di Jatim Park?"
          answer="Tidak diperkenankan untuk membawa makanan dan minuman dari luar kawasan Jatim Park."
        />
      </div>
    );
  };

  export default FaQItem