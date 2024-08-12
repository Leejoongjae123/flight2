"use client"
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from "swiper/modules"
import 'swiper/css';
import "swiper/css/effect-fade"
import { Button } from '@/src/components/ui/button'
import Title from '@/src/components/ui/title'
import { testimonialData } from '@/src/lib/fackData/testimonialData';
import CardOne from './cardOne';
import SlideUp from '@/src/components/animations/slideUp';
import Script from 'next/script'

const TestimonialOne = () => {
  const pagination = {
    clickable: true,
    el: ".testimonial-pagination",
    renderBullet: function (index, className) {
      return `<span class='${className} w-2 h-2 bg-white opacity-60 rounded-full'></span>`;
    },
  };

  return (
    <section className='lg:py-15 py-9'>
      <div className='max-w-[1350px] mx-auto px-[15px]'>
        <SlideUp>
          <div className='flex flex-col items-center'>
            <Button variant="secondary">Location</Button>
            <Title size={"5xl"} className="max-w-[869px] pt-6 text-center">유앤디글로벌 캠퍼스 위치 안내</Title>
            <p className='text-center  my-5'>UND 항공대학교 글로벌 패스웨이는 서울시 강남구 역삼동에 위치하고 있으며 세계적인 수준의 전문 조종사를 양성하노스타코타 항공대학 과정의 입학홍보 및 교육 업무를 담당하고 있습니다.
            </p>
          </div>
        </SlideUp>
        <SlideUp>
          <div id="map" className='w-auto h-[50vh] my-5'>

          </div>
          <div className='my-5 '>
            <p className='text-2xl text-center my-5'>주소 : 서울특별시 강남구 테헤란로8길 40</p>
            <p className='text-2xl text-center my-5'>대중교통 : 2호선 강남역 1, 2번출구 500m 도보 10분 혹은 신분당선 강남역 3,4번 출구 500m 도보 10분</p>

          </div>

        </SlideUp>
      </div>
      {/* <Script src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5ysfgy3qum" strategy="lazyOnload"></Script>
      <Script id="naver-map-script" strategy="lazyOnload">
        {`
          var mapOptions = {
            center: new naver.maps.LatLng(37.4962476, 127.0320077),
            zoom: 20
          };
          

          var map = new naver.maps.Map('map', mapOptions);

          var HOME_PATH = window.HOME_PATH || '.';

var cityhall = new naver.maps.LatLng(37.4962476, 127.0320077),
    map = new naver.maps.Map('map', {
        center: cityhall.destinationPoint(0, 0),
        zoom: 20
    }),
    marker = new naver.maps.Marker({
        map: map,
        position: cityhall
    });

var contentString = [
        '<div class="iw_inner">',
        '   <h3>유앤디항공대글로벌패스웨이 주식회사</h3>',
        '   <p>서울특별시 강남구 테헤란로8길 40</p>',
        '</div>'
    ].join('');

var infowindow = new naver.maps.InfoWindow({
    content: contentString
});

naver.maps.Event.addListener(marker, "click", function(e) {
    if (infowindow.getMap()) {
        infowindow.close();
    } else {
        infowindow.open(map, marker);
    }
});

infowindow.open(map, marker);

        

        `

        }
      </Script> */}
      <Script id="naver-map-script" strategy="lazyOnload">
        {`
          (function() {
            var naverMapScript = document.createElement('script');
            naverMapScript.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=5ysfgy3qum';
            naverMapScript.onload = function() {
              var mapOptions = {
                center: new naver.maps.LatLng(37.4962476, 127.0320077),
                zoom: 20
              };
              
              var map = new naver.maps.Map('map', mapOptions);

              var HOME_PATH = window.HOME_PATH || '.';

              var cityhall = new naver.maps.LatLng(37.4962476, 127.0320077),
                  map = new naver.maps.Map('map', {
                      center: cityhall.destinationPoint(0, 0),
                      zoom: 20
                  }),
                  marker = new naver.maps.Marker({
                      map: map,
                      position: cityhall
                  });

              var contentString = [
                  '<div class="iw_inner">',
                  '   <h3>유앤디항공대글로벌패스웨이 주식회사</h3>',
                  '   <p>서울특별시 강남구 테헤란로8길 40</p>',
                  '</div>'
              ].join('');

              var infowindow = new naver.maps.InfoWindow({
                  content: contentString
              });

              naver.maps.Event.addListener(marker, "click", function(e) {
                  if (infowindow.getMap()) {
                      infowindow.close();
                  } else {
                      infowindow.open(map, marker);
                  }
              });

              infowindow.open(map, marker);
            };
            document.head.appendChild(naverMapScript);
          })();
        `}
      </Script>
    </section>
  )
}

export default TestimonialOne