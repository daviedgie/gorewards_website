<template>
  <div class="ui grid home">
    <div class="eight wide tablet eight wide computer column computer only tablet only left-content">
      <div class="circle-violet" />
      <div class="circle-blue" />
      <div class="circle-yellow" />
      <div class="rounded-yellow" />
      <div class="rounded-violet" />
      <div class="circle-darkblue" />
    </div>
    <div class="eight wide tablet eight wide computer sixteen wide mobile column right-content">
      <div class="logo">
        <img src="@/assets/images/logo.svg" class="svg" />
        <label class="l1">r</label>
        <label class="l2">e</label>
        <label class="l3">w</label>
        <label class="l4">a</label>
        <label class="l5">r</label>
        <label class="l6">d</label>
        <label class="l7">s</label>
      </div>
      <div class="description">
        Be among the first to experience Go Rewards.
      </div>
      <div class="pre-order">Pre-order the app today.</div>
      <div class="downloads">
        <div class="items">
          <i class="apple large icon"></i>
          <div>
            <label> Download on the </label><br/>
            App Store
          </div>
        </div>
        <div class="items">
          <i class="google play large icon"></i>
          <div>
            <label> Get it on </label><br/>
            Google Play
          </div>
        </div>
        <div class="items">
          <i class="windows large icon"></i>
          <div>
            <label> Get it on </label><br/>
            App Gallery
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LadingPage",
};
</script>

<style lang="scss" scoped>
.ui.grid.home {
  margin: 0;
  min-height: 100vh;
  overflow: hidden;

  .left-content {
    .circle-violet {
      position: absolute;
      width: 280px;
      height: 280px;
      background-color: #8faccd;
      border-radius: 140px;
      bottom: -155px;
      right: 10px;
    }

    .circle-blue {
      position: absolute;
      height: 350px;
      width: 350px;
      background-color: #a7daf2;
      right: -120px;
      bottom: 150px;
      border-radius: 200px;
    }

    .circle-yellow {
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 60px;
      background-color: #f5e497;
      bottom: 150px;
      right: 250px;
    }

    .rounded-violet {
      border: solid 17px #2c60a8;
      border-radius: 30px;
      width: 60px;
      height: 60px;
      position: absolute;
      bottom: 75px;
      right: 410px;
    }

    .rounded-yellow {
      border: solid 30px #f6ce47;
      position: absolute;
      width: 120px;
      height: 120px;
      border-radius: 60px;
      bottom: -28px;
      right: 350px;
    }

    .circle-darkblue {
      width: 60px;
      height: 60px;
      position: absolute;
      background-color: #5abdec;
      border-radius: 30px;
      bottom: 55px;
      right: 490px;
    }
  }

  .right-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;

    .logo {
      align-items: center;
      display: flex;

      img.svg {
        width: 200px;
        height: 200px;
      }

      label {
        color: #da3935;
        font-size: 3.6em;
        font-weight: bold;
      }
      
      .l1 {
        -webkit-animation: .5s ease 0s normal forwards 1 fadein;
        animation: .5s ease 0s normal forwards 1 fadein;
      }

      .l2 {
        -webkit-animation: 1s ease 0s normal forwards 1 fadein;
        animation: 1s ease 0s normal forwards 1 fadein;
      }

      .l3 {
        -webkit-animation: 1.5s ease 0s normal forwards 1 fadein;
        animation: 1.5s ease 0s normal forwards 1 fadein;
      }

      .l4 {
        -webkit-animation: 2s ease 0s normal forwards 1 fadein;
        animation: 2s ease 0s normal forwards 1 fadein;
      }

      .l5 {
        -webkit-animation: 2.5s ease 0s normal forwards 1 fadein;
        animation: 2.5s ease 0s normal forwards 1 fadein;
      }

      .l6 {
        -webkit-animation: 3s ease 0s normal forwards 1 fadein;
        animation: 3s ease 0s normal forwards 1 fadein;
      }

      .l7 {
        -webkit-animation: 3.5s ease 0s normal forwards 1 fadein;
        animation: 3.5s ease 0s normal forwards 1 fadein;
      }

      @keyframes fadein{
          0% { opacity:0; }
          33% { opacity:.33; }
          66% { opacity:.66; }
          100% { opacity:1; }
      }
    }

    .description {
      font-size: 1.2em;
      margin-top: 2rem;
    }

    .pre-order {
      margin-top: 5rem;
      font-weight: bold;
    }

    .downloads {
      display: flex;
      flex-direction: row;
      margin-top: .5rem;
      div.items {
        min-width: 100px;
        padding: 5px 10px;
        color: white;
        margin-left: 5px;
        margin-right: 5px;
        background-color: black;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        text-align: left;
        line-height: 1.1;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background-color: rgba(0, 0, 0, .6)
        }

        label {
          font-size: .8em;
          font-weight: normal;
        }
      }
    }
  }

  

  @media screen and (max-width: 992px) {
    .right-content {
      .logo {
        align-items: center;
        display: flex;

        img.svg {
          width: 150px;
          height: 150px;
        }

        label {
          font-size: 3em;
        }
      }

      .description {
        font-size: 1.1em;
      }

      .downloads {
        div.items {
          margin-left: 3px;
          margin-right: 3px;

          label {
            font-size: .7em;
          }
        }
      }
    }

    .left-content {
      .circle-violet {
        width: 180px;
        height: 180px;
        border-radius: 90px;
        bottom: -100px;
        right: 10px;
      }

      .circle-blue {
        height: 260px;
        width: 260px;
        right: -100px;
        bottom: 110px;
        border-radius: 130px;
      }

      .circle-yellow {
        width: 90px;
        height: 90px;
        border-radius: 45px;
        bottom: 110px;
        right: 180px;
      }

      .rounded-violet {
        border-width: 13px;
        border-radius: 23px;
        width: 46px;
        height: 46px;
        position: absolute;
        bottom: 50px;
        right: 270px;
      }

      .rounded-yellow {
        border-width: 25px;
        width: 90px;
        height: 90px;
        border-radius: 60px;
        bottom: -24px;
        right: 230px;
      }

      .circle-darkblue {
        width: 46px;
        height: 46px;
        border-radius: 23px;
        bottom: 25px;
        right: 340px;
      }
    }
  }

  @media screen and (max-width: 414px) {
    .right-content .downloads div.items {
      font-size: .9em;
    }
  }

  // @media screen and (max-width: 768px) {
  //   .left-content {
  //     .circle-violet {
  //       width: 150px;
  //       height: 150px;
  //       border-radius: 75px;
  //       bottom: -80px;
  //       right: 10px;
  //     }

  //     .circle-blue {
  //       height: 220px;
  //       width: 220px;
  //       right: -80px;
  //       bottom: 90px;
  //       border-radius: 130px;
  //     }

  //     .circle-yellow {
  //       width: 80px;
  //       height: 80px;
  //       border-radius: 40px;
  //       bottom: 90px;
  //       right: 160px;
  //     }

  //     .rounded-violet {
  //       border-width: 11px;
  //       border-radius: 18px;
  //       width: 36px;
  //       height: 36px;
  //       bottom: 45px;
  //       right: 240px;
  //     }

  //     .rounded-yellow {
  //       border-width: 22px;
  //       width: 80px;
  //       height: 80px;
  //       border-radius: 40px;
  //       bottom: -21px;
  //       right: 200px;
  //     }

  //     .circle-darkblue {
  //       width: 36px;
  //       height: 36px;
  //       border-radius: 18px;
  //       bottom: 30px;
  //       right: 300px;
  //     }
  //   }
  // }

  // @media screen and (max-width: 767px) {
  //   .ui.grid.home {
  //     overflow: auto;
  //   }
  //   .right-content, .left-content {
  //     min-height: 50vh;
  //   }
  // }
}
</style>
