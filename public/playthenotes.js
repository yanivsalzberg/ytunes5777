var c3 = new Audio('assets/c3.mp3');
var d3 = new Audio('assets/d3.mp3');
var e3 = new Audio('assets/e3.mp3');
var f3 = new Audio('assets/f3.mp3');
var g3 = new Audio('assets/g3.mp3');
var a3 = new Audio('assets/a3.mp3');
var b3 = new Audio('assets/b3.mp3');
var c4 = new Audio('assets/c4.mp3');
var d4 = new Audio('assets/d4.mp3');
var e4 = new Audio('assets/e4.mp3');

var db3 = new Audio('assets/db3.mp3');
var eb3 = new Audio('assets/eb3.mp3');
var gb3 = new Audio('assets/gb3.mp3');
var ab3 = new Audio('assets/ab3.mp3');
var bb3 = new Audio('assets/bb3.mp3');
var cb4 = new Audio('assets/cb4.mp3');
var db4 = new Audio('assets/db4.mp3');
var eb4 = new Audio('assets/eb4.mp3');
var kick = new Audio('assets/kick.mp3');
var snare = new Audio('assets/snare.mp3');
var hat = new Audio('assets/hat.mp3');

noteLog = [];

var playKey = function(keyCodeNum, soundNote, noteNum, divString, keyUpColor) {

  $(document).ready(function () {
      $('body').keydown(function(e){
          if(e.keyCode == keyCodeNum){
            soundNote.currentTime = 0;
            soundNote.play();
            divString.css("background-color", "lightgrey");
          }
      })
  })

  $(document).ready(function () {
      $('body').keyup(function(e){
          if(e.keyCode == keyCodeNum){
            soundNote.pause();
            divString.css("background-color", keyUpColor);
            noteLog.push(noteNum);
            console.log(noteLog);
          }
      })
    })
}

//white notes
playKey(65, c3, 1, $(".c3"), "white");
playKey(83, d3, 2, $(".d3"), "white");
playKey(68, e3, 3, $(".e3"), "white");
playKey(70, f3, 4, $(".f3"), "white");
playKey(71, g3, 5, $(".g3"), "white");
playKey(72, a3, 6, $(".a3"), "white");
playKey(74, b3, 7, $(".b3"), "white");
playKey(75, c4, 8, $(".c4"), "white");
playKey(76, d4, 9, $(".d4"), "white");
playKey(186, e4, 10, $(".e4"), "white");

//black notes
playKey(87, db3, 2, $(".db3"), "darkgrey");
playKey(69, eb3, 2, $(".eb3"), "darkgrey");
playKey(84, gb3, 2, $(".gb3"), "darkgrey");
playKey(89, ab3, 2, $(".ab3"), "darkgrey");
playKey(85, bb3, 2, $(".bb3"), "darkgrey");
playKey(79, db4, 2, $(".db4"), "darkgrey");
playKey(80, eb4, 2, $(".eb4"), "darkgrey");

//drums
playKey(49, kick, 2, $(".kick"), "white");
playKey(50, snare, 2, $(".snare"), "white");
playKey(51, hat, 2, $(".hat"), "white");






//
//
// //letter "s"
//
// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 83){
//           d2.play();
//           $("#re").css("background-color", "white");
//         }
//     })
//   })
//
//
//   $(document).ready(function () {
//       $('body').keyup(function(e){
//           if(e.keyCode == 83){
//             d2.pause();
//             $("#re").css("background-color", "orange");
//             $("#bx10").append("<b>re </b>");
//             noteLog.push(2);
//             console.log(noteLog);
//           }
//       })
//     })
//
//
//
// ///////////////
//
// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 51){
//           e2.play();
//           $("#mi").css("background-color", "white");
//         }
//     })
//   })
//
//
//   $(document).ready(function () {
//       $('body').keyup(function(e){
//           if(e.keyCode == 51){
//             e2.pause();
//             $("#mi").css("background-color", "yellow");
//             $("#bx10").append("<b>mi </b>");
//             noteLog.push(3);
//             console.log(noteLog);
//           }
//       })
//     })
//
//
//
// ///////////////
//
// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 52){
//           f2.play();
//           $("#fa").css("background-color", "white");
//         }
//     })
//   })
//
//
//   $(document).ready(function () {
//       $('body').keyup(function(e){
//           if(e.keyCode == 52){
//             f2.pause();
//             $("#fa").css("background-color", "green");
//             $("#bx10").append("<b>fa </b>");
//             noteLog.push(4);
//             console.log(noteLog);
//           }
//       })
//     })
//
//
//
// ///////////////
//
//
// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 53){
//           g2.play();
//           $("#sol").css("background-color", "white");
//         }
//     })
//   })
//
//
//   $(document).ready(function () {
//       $('body').keyup(function(e){
//           if(e.keyCode == 53){
//             g2.pause();
//             $("#sol").css("background-color", "blue");
//             $("#bx10").append("<b>sol </b>");
//             noteLog.push(5);
//             console.log(noteLog);
//           }
//       })
//     })
//
//
//
// ///////////////
//
//
// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 54){
//           a2.play();
//           $("#la").css("background-color", "white");
//         }
//     })
//   })
//
//
//   $(document).ready(function () {
//       $('body').keyup(function(e){
//           if(e.keyCode == 54){
//             a2.pause();
//             $("#la").css("background-color", "purple");
//             $("#bx10").append("<b>la </b>");
//             noteLog.push(6);
//             console.log(noteLog);
//           }
//       })
//     })
//
//
//
// ///////////////
//
//
// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 55){
//           b2.play();
//           $("#ti").css("background-color", "white");
//         }
//     })
//   })
//
//
//   $(document).ready(function () {
//       $('body').keyup(function(e){
//           if(e.keyCode == 55){
//             b2.pause();
//             $("#ti").css("background-color", "pink");
//             $("#bx10").append("<b>ti </b>");
//             noteLog.push(7);
//             console.log(noteLog);
//           }
//       })
//     })
//
//
//
// ///////////////
//
//
//
// $(document).ready(function () {
//     $('body').keydown(function(e){
//         if(e.keyCode == 56){
//           c3.play();
//           $("#do2").css("background-color", "white");
//         }
//     })
//   })
//
//
//   $(document).ready(function () {
//       $('body').keyup(function(e){
//           if(e.keyCode == 56){
//             c3.pause();
//             $("#do2").css("background-color", "red");
//             $("#bx10").append("<b>do </b>");
//             noteLog.push(8);
//             console.log(noteLog);
//           }
//       })
//     })
//
//
//
// ///////////////
//
//
//
//
//
//
//
//
//
//
//
// // var playNote = function(keyNum, sound) {
// //
// // $(document).ready(function () {
// //     $('body').keydown(function(e){
// //         if(e.keyCode == keyNum){
// //           sound.play();
// //         }
// //     })
// //   })
// //
// //
// //   $(document).ready(function () {
// //       $('body').keyup(function(e){
// //           if(e.keyCode == keyNum){
// //             console.log("key!");
// //             sound.pause();
// //             $("#bx10").append("<b>do </b>");
// //             noteLog.push(1);
// //             console.log(noteLog);
// //           }
// //       })
// //     })
// //
// // }
// //
// // playNote(50, d2);
// // playNote(51, e2);
// // playNote(52, f2);
// // playNote(53, g2);
// // playNote(54, a2);
// // playNote(55, b2);
// // playNote(56, c3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //
// // $('body').on('keydown',function(e){
// //      if(e.which==49){
// //        c2.play();
// //        audio.currentTime = .25;
// //        noteLog.push(1);
// //      }
// //  });
// //
// //  $('body').on('keyup',function(e){
// //      if(e.which==49){
// //         c2.pause();
// //         audio.currentTime = .25;
// //      }
// //  });
// //
// //
// //
// //
// // // KEYDOWN EVENTS
// // $('body').on('click', function(e){
// //       console.log(e);
// //     });
// //
// // console.log(e);
// //
// //
// // $('body').on('keydown',function(e){
// //         if(e.which==49){
// //               c4();
// //
// //         }
// //     });
// //
// // $('body').on('keydown',function(e){
// //         if(e.which==50){
// //             alert("yo!");
// //               d4();
// //         }
// //     });
// //
// // $('body').on('keydown',function(e){
// //         if(e.which==51){
// //               e4();
// //         }
// //     });
// //
// // $('body').on('keydown',function(e){
// //         if(e.which==52){
// //               f4();
// //         }
// //     });
// //
// //
// //   $('body').on('keydown',function(e){
// //           if(e.which==53){
// //                g4();
// //           }
// //       });
// //
// //   $('body').on('keydown',function(e){
// //           if(e.which==54){
// //                 a4();
// //           }
// //       });
// //
// //   $('body').on('keydown',function(e){
// //           if(e.which==55){
// //                 b4();
// //           }
// //       });
// //
// //   $('body').on('keydown',function(e){
// //           if(e.which==56){
// //                 c5();
// //           }
// //       });
// //
// //
// //
// //
// // // turn loop on and off with Q-key
// //
// //   $('body').on('keydown',function(e){
// //       if(e.which==81){
// //           loop();
// //       }
// //   });
// //
// //   $('body').on('keyup',function(e){
// //       if(e.which==81){
// //           pause();
// //           audio.currentTime = .05;
// //       }
// //   });
// //
// //
// //
// //
// // // KEYUPEVENTS
// //
// //
// // //
// // // $('body').on('keyup',function(e){
// // //         if(e.which==50){
// // //               d4();
// // //         }
// // //     });
// // //
// // // $('body').on('keyup',function(e){
// // //         if(e.which==51){
// // //               e4();
// // //         }
// // //     });
// // //
// // // $('body').on('keyup',function(e){
// // //         if(e.which==52){
// // //               f4();
// // //         }
// // //     });
// // //
// // //
// // //   $('body').on('keyup',function(e){
// // //           if(e.which==53){
// // //                g4();
// // //           }
// // //       });
// // //
// // //   $('body').on('keyup',function(e){
// // //           if(e.which==54){
// // //                 a4();
// // //           }
// // //       });
// // //
// // //   $('body').on('keyup',function(e){
// // //           if(e.which==55){
// // //                 b4();
// // //           }
// // //       });
// // //
// // //   $('body').on('keyup',function(e){
// // //           if(e.which==56){
// // //                 c5();
// // //           }
// // //       });
// //
// //
// //
// //
// //
// //
// //
// //
// // // // KEYDOWN and KEYUP EVENTS
// //
// // // $('body').on('keydown keyup',function(e){
// // //         if(e.which==80){
// // //               comingSoon
// // //         }
// // //     });
// // //
// // // $('body').on('keydown keyup',function(e){
// // //         if(e.which==81){
// // //               comingSoon
// // //         }
// // //     });
// // //
// // // $('body').on('keydown keyup',function(e){
// // //         if(e.which==82){
// // //               comingSoon
// // //         }
// // //     });
