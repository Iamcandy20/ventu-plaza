"use client";
import React from "react";
import Image from "next/image";
import "./Desamparados.css";

const DesamparadosPage = () => {
  return (
    <section className="desamparadosPage">
      {/* HERO */}
      <div className="heroDesamparados">
        <div className="heroBgWrapper">
          <Image
            src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1920&q=80"
            alt="Vista panorámica de Ventu Plaza Desamparados"
            fill
            className="heroBg"
            priority
            sizes="100vw"
          />
        </div>
        <div className="heroOverlay" />
        <div className="heroContent">
          <h1>Ventu Plaza Desamparados</h1>
          <p>
            Un espacio al aire libre donde el diseño, la gastronomía y el
            entretenimiento se encuentran.
          </p>
          <a href="#sobre" className="heroBtn">
            Conócenos
          </a>
        </div>
      </div>

      {/* SOBRE LA PLAZA */}
      <div id="sobre" className="sobreDesamparados">
        <div className="sobreImagen">
          <Image
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=900&q=80"
            alt="Vista moderna de Ventu Plaza Desamparados"
            width={900}
            height={600}
          />
        </div>
        <div className="sobreTexto">
          <h2>Una experiencia única</h2>
          <p>
            Ventu Plaza Desamparados combina arquitectura moderna con áreas
            verdes y espacios abiertos para crear un ambiente perfecto para
            toda la familia. Descubre tiendas exclusivas, restaurantes con
            terrazas, y actividades pensadas para disfrutar el día completo.
          </p>
          <p>
            Diseñada para inspirar, conectar y vivir nuevas experiencias, nuestra
            plaza redefine el concepto de compras y entretenimiento en el sur de
            San José.
          </p>
        </div>
      </div>

      {/* GALERÍA */}
      <div className="galeriaDesamparados">
        <h2>Explora la plaza</h2>
        <div className="galeriaGrid">
          <Image
            src="https://images.unsplash.com/photo-1597008255683-5c27c3c2f5a4?auto=format&fit=crop&w=800&q=80"
            alt="Área de restaurantes"
            width={800}
            height={600}
          />
          <Image
            src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80"
            alt="Tiendas al aire libre"
            width={800}
            height={600}
          />
          <Image
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80"
            alt="Zona de paseo"
            width={800}
            height={600}
          />
          <Image
            src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80"
            alt="Área de descanso"
            width={800}
            height={600}
          />
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Ambiente familiar"
            width={800}
            height={600}
          />
          <Image
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
            alt="Vista general de la plaza"
            width={800}
            height={600}
          />
        </div>
      </div>

      {/* MAPA */}
      <div className="mapaDesamparados">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.052699186269!2d-84.06604822501064!3d9.8943530902053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e37cfce36a03%3A0x50db5b60ce11443!2sDesamparados%2C%20San%20Jos%C3%A9%2C%20Costa%20Rica!5e0!3m2!1ses-419!2shn!4v1700000000000"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="mapaCard">
          <h3>📍 Ubicación</h3>
          <p>Av. Principal, Desamparados, San José, Costa Rica</p>
          <p>🕒 Lunes a domingo: 10:00 a.m. - 10:00 p.m.</p>
          <a
            href="https://goo.gl/maps/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="btnMapa"
          >
            Cómo llegar
          </a>
        </div>
      </div>

      {/* TIENDAS DESTACADAS */}
      <div className="tiendasDesamparados">
        <h2>Tiendas destacadas</h2>
        <div className="tiendasSlider">
          <div className="tiendaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Starbucks_Corporation_Logo_2011.svg"
              alt="Logo Starbucks"
              width="90"
              height="90"
            />
            <p>Starbucks</p>
          </div>

          <div className="tiendaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Pizza_Hut_logo.svg"
              alt="Logo Pizza Hut"
              width="90"
              height="90"
            />
            <p>Pizza Hut</p>
          </div>

          <div className="tiendaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Zara_Logo.svg"
              alt="Logo Zara"
              width="90"
              height="90"
            />
            <p>Zara</p>
          </div>

          <div className="tiendaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/H%26M-Logo.svg"
              alt="Logo H&M"
              width="90"
              height="90"
            />
            <p>H&M</p>
          </div>

          <div className="tiendaCard">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Burger_King_2020.svg"
              alt="Logo Burger King"
              width="90"
              height="90"
            />
            <p>Burger King</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesamparadosPage;
