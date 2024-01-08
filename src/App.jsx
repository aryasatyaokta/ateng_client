/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CheckUserExist, CheckUserExistPretest } from "./helper/helper";

import Welcomepage from "./components/welcomepage";
import Loginpage from "./components/loginpage";
import Registrasi from "./components/registrasi";
import Dashboard from "./components/dashboard_nav/dashboard";
import Profile from "./components/profile_nav/profile";

// Materi
import Materi from "./components/materi_nav/materi";
import Materi_perkalian from "./components/materi_nav/baca_materi/materi_perkalian";
import Materi_pembagian from "./components/materi_nav/baca_materi/materi_pembagian";

// Latihan Soal
import Latsol_perkalian from "./components/materi_nav/latihan_soal/latsol_perkalian";
import LatsolPembagian from "./components/materi_nav/latihan_soal/latsol_pembagian";

// Soal
import Soal from "./components/soal_nav/soal";
import Soal_belajar_pretest from "./components/soal_nav/soal_pre_test/soal_belajar_pretest";
import Soal_belajar_posttest from "./components/soal_nav/soal_post_test/soal_belajar_posttest";

// Tambahan
import Result_posttest from "./components/soal_nav/soal_post_test/result_posttest";
import Quiz_setup_posttest from "./components/soal_nav/soal_post_test/quiz_setup_posttest";
import Page_materi from "./components/materi_nav/baca_materi/page_materi";

import Result_pretest from "./components/soal_nav/soal_pre_test/result_pretest";
import Quiz_setup_pretest from "./components/soal_nav/soal_pre_test/quiz_setup_pretest";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcomepage/>} />
        <Route path="/loginpage" element={<Loginpage/>}/>
        <Route path="/registrasi" element={<Registrasi/>}/>
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard/>} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile/>} />} />


        {/* Materi */}
        <Route path="/materi" element={<PrivateRoute element={<Materi/>} />} />
        <Route path="/page_materi" element={<PrivateRoute element={<Page_materi/>} />} />
        <Route path="/materi_perkalian" element={<PrivateRoute element={<Materi_perkalian/>} />} />
        <Route path="/materi_pembagian" element={<PrivateRoute element={<Materi_pembagian/>} />} />

        {/* Latihan Soal */}
        <Route path="/latihan_soal_perkalian" element={<PrivateRoute element={<Latsol_perkalian/>} />} />
        <Route path="/latihan_soal_pembagian" element={<PrivateRoute element={<LatsolPembagian/>} />} />

        {/* Soal */}
        <Route path="/soal" element={<PrivateRoute element={<Soal/>} />}/>

        {/* Check user Exist */}
        <Route path="/quiz_setup_posttest" element={<PrivateRoute element={<Quiz_setup_posttest/>} />} />
        <Route path="/quiz_setup_pretest" element={<PrivateRoute element={<Quiz_setup_pretest/>} />} />

        <Route path="/soal_belajar_posttest" element={<PrivateRoute element={<Soal_belajar_posttest />} />}  />
        <Route path="/soal_belajar_pretest" element={<PrivateRoute element={<Soal_belajar_pretest />} />}  />
        <Route path="/result_posttest" element={<PrivateRoute element={<CheckUserExist><Result_posttest /></CheckUserExist>}/>}  />
        <Route path="/result_pretest" element={<PrivateRoute element={<CheckUserExistPretest><Result_pretest /></CheckUserExistPretest>}/>}  />

      </Routes>
    </Router>
  );
}

export default App;
