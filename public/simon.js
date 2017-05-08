function simon() {

      var nodes = {"1": nodeC4, "2": nodeD4, "3":nodeE4, "5": nodeG4, "6": nodeA4, "8": nodeC5};
      var arr = [5,3,3,3,5,3,3,3,1,2,3,3,5,5,5,5,5];

      function playNote(arr,i) {
        var tabName = arr[i];
        if (arr.length<=i) {
          return;
        }
        nodes[tabName].gain.value = .5;
        setTimeout(function() {
          nodes[tabName].gain.value = .0;
          playNote(arr,i+1);
        }, 200);
      }

        playNote(arr,0);
  };
