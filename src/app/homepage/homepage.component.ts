import { Component, OnInit } from '@angular/core';
declare const $:any;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.less']
})
export class HomepageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.your-class').slick({
        autoplay:true
      });
    });
    $(document).ready(function(){
      $('.sliderTwo').slick({
        arrows: false,
      });

    });
    $(document).ready(function(){
      $('.gallerySlider').slick({
        dots: true,
       infinite: false,
        speed: 100,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay:false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
      }
    }]
  });
    });

    $(document).ready(function(){
      $('.your-class').css({"height": ($(window).height()*80)/100});
      $('.image-slide').css({"height": ($(window).height()*80)/100});
    });

  }

}
