const envelopeContents = [
  "Tiến Anh Chúc:Chúc  Tết đến trăm điều như ý - Mừng xuân sang vạn sự thành công.", 
  "Tiến Anh Chúc:Năm mới chúc nhau sức khỏe nhiều. - Năm mới, công việc như ý, giàu sang phú quý.",
  "Tiến Anh Chúc:Năm mới chúc bạn và gia đình nhiều niềm vui mới, nhiều thành công mới và nhiều may mắn mới.",
  "Tiến Anh Chúc:Chúc năm mới an khang thịnh vượng, đại cát đại lợi, vạn sự như ý!",
  "Tiến Anh Chúc:Xin chúc bạn và gia đình một năm mới An Khang Thịnh Vượng, Hạnh Phúc Bình An.",
  "Tiến Anh Chúc:Năm mới đến, chúc bạn luôn mạnh khỏe, hạnh phúc và thành công trong mọi lĩnh vực.",
  "Tiến Anh Chúc:Chúc bạn có một năm mới ấm áp, đầy ắp niềm vui và hạnh phúc bên gia đình và bạn bè.",
  "Tiến Anh Chúc:Chúc bạn một năm mới thật nhiều may mắn, sức khỏe dồi dào và thành công hơn nữa trong công việc và cuộc sống.",
  "Tiến Anh Chúc:Năm mới chúc bạn và gia đình mình thật nhiều tài lộc, phú quý, và tràn đầy hạnh phúc.",
  "Tiến Anh Chúc:Chúc bạn năm mới rực rỡ, phát tài phát lộc, và đong đầy niềm vui.",
  "Tiến Anh Chúc:Chúc bạn một năm mới thành công rực rỡ, hạnh phúc sum vầy và tràn đầy yêu thương.",
  "Tiến Anh Chúc:Năm mới đến, chúc bạn và gia đình luôn được bình an, sức khỏe dồi dào, và hạnh phúc trọn vẹn.",
  "Tiến Anh Chúc:Chúc bạn có một năm mới với nhiều cơ hội mới, thách thức mới và thành công mới.",
  "Tiến Anh Chúc:Năm mới chúc bạn luôn vui vẻ, hạnh phúc và tiến xa hơn trên con đường sự nghiệp của mình.",
  "Tiến Anh Chúc:Chúc bạn năm mới phát tài, phát lộc, và gặp nhiều may mắn trong mọi công việc.",
  '<p style="color:red">Tiến Anh Chúc:Bạn thật may mắn khi đây là lời chúc thật của tớ còn lại đều là AI:Chúc bạn và gia đình mạnh khoẻ gặp nhiều may mắn và thuận lợi trong cuộc sống đặc biệt là phải chất nhé:)).</p>',
  "Tiến Anh Chúc:Chúc bạn và gia đình một năm mới an lành, may mắn và thành công trên mọi mặt.",
];

$(document).ready(() => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const envelopeImages = shuffle([1, 2, 3, 4, 5, 6, 7, 8]);

  for (var i = 0; i < 8; i++) {
    $(`#envelope-${i + 1} img`).attr("src", `../assets/images/${envelopeImages[i]}.svg`);
  }

  for (var i = 0; i < 8; i++) {
    $(`#envelope-${i + 1}`).click(function () {
      if ($(BUTTON_PAUSE_AUDIO_SELECTOR).hasClass("hidden")) {
        play();
      }

      $(this).removeClass("transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300");

      $(this).addClass("bg-[#ffefe0] transition duration-300 delay-200");
      $(this).css("transform", "rotateY(180deg)");
      $(this).children().addClass("transition-invisible delay-300 invisible");

      const messages = shuffle(envelopeContents);

      setTimeout(() => {
        $(this).css("transform", "rotateY(360deg)");
        $(this).append(
          `<div class="absolute inset-4 text-[#562903]">
            <p>${messages[i]}</p> 
            <div class="pt-8 text-right">
              <button onclick="window.location.href='/2024'" type="button" class="text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span class="sr-only">Icon description</span>
              </button>
            </div>
          </div>`
        );
      }, 350);

      $(this).off("click");
    });
  }
});
