var c3 = new Audio('assets/c3.mp3');
var d3 = new Audio('assets/d3.mp3');
var e3 = new Audio('assets/e3.mp3');
var f3 = new Audio('assets/f3.mp3');
var g3 = new Audio('assets/g3.mp3');
var a3 = new Audio('assets/a3.mp3');
var b3 = new Audio('assets/b3.mp3');
var c4 = new Audio('assets/c4.mp3');

noteLog = [];

var playKey = function(keyCodeNum, soundNote, noteNum, divString) {

  $(document).ready(function () {
      $('body').keydown(function(e){
          if(e.keyCode == keyCodeNum){
            soundNote.play();
            divString.css("background-color", "lightgrey");
          }
      })
  })

  $(document).ready(function () {
      $('body').keyup(function(e){
          if(e.keyCode == keyCodeNum){
            soundNote.pause();
            divString.css("background-color", "white");
            noteLog.push(noteNum);
            console.log(noteLog);
          }
      })
    })
}

playKey(65, c3, 1, $(".c3"));
playKey(83, d3, 2, $(".d3"));
playKey(68, e3, 3, $(".e3"));
playKey(70, f3, 4, $(".f3"));
playKey(71, g3, 5, $(".g3"));
playKey(72, a3, 6, $(".a3"));
playKey(74, b3, 7, $(".b3"));
playKey(75, c4, 8, $(".c4"));
playKey(76, c4, 9, $(".c4"));
playKey(186, c4, 10, $(".c4"));






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
