particlesJS("particles-js", {
  particles: {
    number: {
      value: 100, //���̐��l��ύX����Ɗ􉽊w�͗l�̐��������ł���
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: ["#00bbdd", "#404B69", "#DBEDF3"] //�F
    },
    shape: {
      type: "polygon", //�`���polygon���w��
      stroke: {
        width: 0
      },
      polygon: {
        nb_sides: 50 //���p�`�̊p�̐�
      },
      image: {
        width: 190,
        height: 100
      }
    },
    opacity: {
      value: 0.664994832269074,
      random: false,
      anim: {
        enable: true,
        speed: 2.2722661797524872,
        opacity_min: 0.08115236356258881,
        sync: false
      }
    },
    size: {
      value: 7,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 140,
      color: "#DBEDF3",
      opacity: 1,
      width: 1
    },
    move: {
      enable: true,
      speed: 1, //���̐��l������������Ƃ������ȓ����ɂȂ�
      direction: "none", //�����w��Ȃ�
      random: true, //�����̓����_��
      straight: false, //�������Ƃǂ߂Ȃ�
      out_mode: "out", //��ʂ̊O�ɏo��悤�ɕ`��
      bounce: false, //���˕Ԃ�Ȃ�
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 961.4383117143238
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
        mode: "repulse"
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  retina_detect: true
});
