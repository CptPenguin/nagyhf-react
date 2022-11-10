import React, { useState } from 'react';
import { Login } from './Login.js';
import { Home } from './Home.js';
import './style.css';

/*1. feladat
csináljunk egy admin felületet, és egy login felülettel indul
a login felületen be kell írni az emailt és jelszót, semmi validáció 
a gombot csak akkor süthetjük el ha legalább 1 karakter van mindkét mezőben
ha gombot megnyomom belép a home-ba
a home:
felül horizontális menü
  2 gomb van benne
    egyikkel ki tudunk lépni (logout)
    másikkal tudjuk toggle-özni a bal oldalról becsúszó menüt
vertikális menü:
  3 menüpont van benne
    home nem csinál semmit
    todos json placholderről lekéri a cuccokat és kijön eggy modalban a tartalma az adott dolognak (mindenhogy lehessen kilépni)
    chat inputmezőbe beírok cuccot alul inputmező felette az üzenet, a legfrissebb kerüljön legalulra
    üzenetet lehessen törölni
*/
export default function App() {
  const [loginScreen, setLoginScreen] = useState(false);
  return (
    <div>
      {loginScreen && <Login setLoginScreen={setLoginScreen} />}
      {!loginScreen && <Home setLoginScreen={setLoginScreen} />}
    </div>
  );
}
