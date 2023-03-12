import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import "./StyleSheets/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
export default function Footer({ footer }) {
  console.log("footer", footer);
  return (
    <div className="footer">
      <div className="preFooter">
        <div className="loop preFooterItem">
          <LoopIcon fontSize="large" />
          <p>
            <b>Hassle-free replacement</b>
            <br />
            10-day easy replacement policy on mi.com
          </p>
        </div>
        <div className="shield preFooterItem">
          <VerifiedUserOutlinedIcon fontSize="large" />
          <p>
            <b>100% secure payments</b>
            <br />
            We support Cards, Wallets, EMI and COD
          </p>
        </div>
        <div className="map preFooterItem">
          <MapOutlinedIcon fontSize="large" />
          <p>
            <b>Vast service network</b>
            <br />
            1000 Mi service-centers across 600 cities
          </p>
        </div>
      </div>
      <div className="preFooter2">
        <div className="div1 preFooter2Item">
          <p>
            <b>LET'S STAY IN TOUCH</b>
            <br />
            Get updates on sales specials and more
          </p>
        </div>
        <div className="div2 preFooter2Item">
          <div>
            <input
              type="email"
              name=""
              id=""
              placeholder="Enter Email Address"
            />
          </div>
          <p>Thanks. You're on our email list for special offers.</p>
        </div>
        <div className="div3 preFooter2Item">
          <p>
            <b>FOLLOW MI</b>
            <br />
            We want to hear from you!
          </p>
        </div>
        <div className="div4 preFooter2Item">
          <p className="preFooter2Item1">
            <FacebookIcon fontSize="small" />
          </p>
          <p className="preFooter2Item2">
            <YouTubeIcon fontSize="small" />
          </p>
          <p className="preFooter2Item3">
            <InstagramIcon fontSize="small" />
          </p>
          <p className="preFooter2Item4">
            <TwitterIcon fontSize="small" />
          </p>
        </div>
      </div>
      <div className="footerEnd">
        <div className="support footerEndItem">
          <p>SUPPORT</p>
          {footer.support.map((e, idx) => {
            return (
              <a href={e.url} key={idx}>
                {e.name}
              </a>
            );
          })}
        </div>
        <div className="shop footerEndItem">
          <p>SHOP AND LEARN</p>
          {footer.shopAndLearn.map((e, idx) => {
            return (
              <a href={e.url} key={idx}>
                {e.name}
              </a>
            );
          })}
        </div>
        <div className="retail footerEndItem">
          <p>RETAIL STORE</p>
          {footer.retailStore.map((e, idx) => {
            return (
              <a href={e.url} key={idx}>
                {e.name}
              </a>
            );
          })}
        </div>
        <div className="about footerEndItem">
          <p>ABOUT</p>
          {footer.aboutUS.map((e, idx) => {
            return (
              <a href={e.url} key={idx}>
                {e.name}
              </a>
            );
          })}
        </div>
        <div className="contact footerEndItem">
          <p>CONTACT US</p>
          {footer.contactUs.map((e, idx) => {
            return (
              <a href={e.url} key={idx}>
                {e.name}
              </a>
            );
          })}
        </div>
        <div className="chatItem">
          Chat with our Virtual AI Bot(24/7 Live Agent Support)
          <button>CHAT NOW</button>
        </div>
      </div>
      <div className="copyright">
        <div className="borderLine"></div>
        <div className="copyrightText">
          Copyright © 2010 - 2023 By Faiz 🙂. All Rights Reserved
        </div>
      </div>
    </div>
  );
}
