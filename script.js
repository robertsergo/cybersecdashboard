ZC.LICENSE = ["7b185ca19b4be2cba68fdcd369c663a9"];

var chartOneData = {
  type: "area",
  globals: {
    fontFamily: "Roboto",
    fontColor: "var(--fontColor)",
    fontSize: "16px"
  },
  title: {
    text: "Today",
    align: "left",
    fontWeight: "normal",
    fontSize: "32px",
    fontColor: "var(--fontColor)",
    margin: "0px 0px 0px 32px"
  },
  tooltip: {
    backgroundColor: "var(--white)",
    fontColor: "var(--fontColor)",
    callout: true,
    padding: "24px 56px",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "var(--lightGray)",
    text: "$%v<br>October 13, %kl"
  },
  crosshairX: {
    lineColor: "var(--darkBlue)",
    lineWidth: 3,
    marker: {
      type: "circle",
      size: 15,
      borderWidth: 3,
      backgroundColor: "transparent",
      borderWidth: 3,
      borderColor: "var(--darkBlue)"
    },
    plotLabel: {
      backgroundColor: "transparent",
      fontColor: "transparent",
      borderWidth: 0,
      borderColor: "transparent",
      text: " "
    },
    scaleLabel: {
      visible: false
    }
  },
  scaleX: {
    minValue: 1509120000000,
    utf: true,
    timeZone: 0,
    step: "3hour",
    transform: {
      type: "date",
      all: "%h:%i"
    },
    lineWidth: 0,
    tick: {
      visible: false
    },
    item: {
      fontSize: "16px",
      alpha: "0.4"
    }
  },
  scaleY: {
    guide: {
      lineStyle: "solid",
      lineColor: "var(--gray)"
    },
    lineWidth: 0,
    item: {
      fontSize: "16px",
      alpha: "0.4"
    },
    tick: {
      visible: false
    },
    values: "5500:5800:100"
  },
  plot: {
    aspect: "spline"
  },
  plotarea: {
    margin: "66px 66px 66px 66px"
  },
  series: [
    {
      values: [5600, 5650, 5625, 5800, 5650, 5750, 5675, 5750, 5700, 5725],
      backgroundColor: "#3E84F9 #fff",
      lineColor: "var(--darkBlue)",
      lineWidth: 3,
      alpha: "0.7",
      marker: {
        visible: false
      }
    }
  ]
};

zingchart.render({
  id: "chartOne",
  data: chartOneData,
  height: "100%",
  width: "100%"
});

var chartTwoData = {
  type: "nestedpie",
  globals: {
    fontFamily: "Roboto"
  },
  tooltip: {
    visible: false
  },
  title: {
    text: "Todays History",
    align: "left",
    fontWeight: "normal",
    fontSize: "32px",
    fontColor: "var(--fontColor)",
    margin: "0px 0px 0px 32px"
  },
  legend: {
    align: "center",
    verticalAlign: "bottom",
    item: {
      fontSize: "16px"
    },
    borderWidth: 0,
    marker: {
      type: "circle"
    }
  },
  plot: {
    sliceStart: "35%",
    bandSpace: 25
  },
  series: [
    {
      values: [20, 50, 20],
      backgroundColor: "#FF4484",
      shadow: false,
      borderWidth: 0,
      text: "Todays Lowest Rate"
    },
    {
      values: [30, 40, 30],
      backgroundColor: "#3E85F7",
      shadow: false,
      borderWidth: 0,
      text: "Todays Opening"
    },
    {
      values: [30, 40, 30],
      backgroundColor: "#00CB4F",
      shadow: false,
      borderWidth: 0,
      text: "Todays Highest Rate"
    }
  ]
};

zingchart.render({
  id: "chartTwo",
  data: chartTwoData,
  height: "100%",
  width: "100%"
});

var menu = document.querySelector("#hamburger");
var mobileMenu = document.querySelector("#mobile-menu");

function addMenu() {
  mobileMenu.classList.toggle("open");

  if (mobileMenu.className == "open") {
    var menu = document.querySelector("#hamburger");
    menu.setAttribute(
      "src",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/374756/x.svg"
    );
  } else if (mobileMenu.className !== "open") {
    var menu = document.querySelector("#hamburger");
    menu.setAttribute(
      "src",
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/374756/hamburger.svg"
    );
  }
}

menu.addEventListener("click", addMenu);
