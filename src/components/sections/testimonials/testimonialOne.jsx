"use client"
import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectFade } from "swiper/modules"
import 'swiper/css';
import "swiper/css/effect-fade"
import { Button } from '@/components/ui/button'
import Title from '@/components/ui/title'
import { testimonialData } from '@/lib/fackData/testimonialData';
import CardOne from './cardOne';
import SlideUp from '@/components/animations/slideUp';
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
          </div>
        </SlideUp>
        <SlideUp>
          <div id="map" className='w-auto h-[50vh] my-5'></div>
          <p className='text-2xl text-center'>주소 : 서울특별시 강남구 테헤란로8길 40</p>
          {/* <div className='relative'>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            pagination={pagination}
                            loop={true}
                            // effect={"fade"}
                            grabCursor= {true}
                            modules={[Pagination, Navigation, EffectFade]}
                        >
                            {
                                testimonialData.slice(0, 3).map(({ id, name, position, rating, review, src }) => <SwiperSlide key={id}>
                                    <CardOne name={name} rating={rating} review={review} position={position} src={src} />
                                </SwiperSlide>
                                )
                            }
                        </Swiper>
                        <div className='testimonial-pagination flex items-center gap-2 absolute bottom-16 left-20 z-10 [&_.swiper-pagination-bullet-active]:opacity-100'></div>
                    </div> */}
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