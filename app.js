// DỮ LIỆU ĐẦY ĐỦ 100% 10 BÀI HỌC CHUẨN 7 PHÂN MỤC
const LESSONS_DATA = [
  {
    id: 1,
    title: "Lời chào và làm quen",
    titleNung: "Cậu Tóong Them Cúc quen",
    desc: "Làm quen với các câu xưng hô, chào hỏi xã giao thường nhật của người Nùng An.",
    vocab: [
      { word: "Chào", vi: "Chào", eg: "Chào giạ (Cháu chào bà)" },
      { word: "Lớp tọoc slâu", vi: "Lớp học", eg: "Học sày lớp tọoc slâu" },
      { word: "Dậu Lậu", vi: "Ở đâu", eg: "Mứng dậu lậu? (Bạn ở đâu?)" },
      { word: "Mạnh rềng", vi: "Khỏe mạnh", eg: "Giạ mạnh rềng (Bà khỏe mạnh)" },
      { word: "Cúc quen", vi: "Làm quen", eg: "Rạu cúc quen (Chúng mình làm quen)" },
      { word: "Cạm ơn", vi: "Cảm ơn", eg: "Cạm ơn mứng lai" },
      { word: "Tù Sọi", vi: "Giúp đỡ", eg: "Tù sọi tê giạ (Giúp đỡ ông bà)" },
      { word: "Tê, giạ", vi: "Ông, bà", eg: "Tê giạ cại cú (Ông bà của tôi)" }
    ],
    dialogue: [
      { speaker: "Lương", nung: "Chào Mai! Ngòn nấy mứng bấu pây chợ Phin náu á? Cú hen mứng dân dậu thân ràn gia.", vi: "Chào Mai! Sáng nay cậu không đi chợ Phiên à? Mình thấy cậu đứng trước sân cùng bà." },
      { speaker: "Mai", nung: "Chào Lương! Ngòn nấy củ dậu ràn sọi giạ tí vịck. À, nấy là giạ củ.", vi: "Chào Lương! Hôm nay mình ở nhà giúp bà một chút. À, đây là bà mình." },
      { speaker: "Lương", nung: "Lương chào giạ, giạ rềng bấu?", vi: "Cháu chào bà! Bà khỏe không ạ?" },
      { speaker: "Bà", nung: "Giạ rềng, cạm ơn Lương.", vi: "Bà khỏe, cảm ơn cháu." },
      { speaker: "Mai", nung: "Giạ ời, nấy là Lương, pan hạc sày lớp them mai dậu Trường Tiểu học Trần Phú.", vi: "Bà ơi, đây là Lương, bạn học cùng lớp với cháu ở Trường Tiểu học Trần Phú." },
      { speaker: "Bà", nung: "Chào lan Lương! Sloóng lan tù sày tọoc slâu đây nó! Cậy sọi tê giạ, cô mí them!", vi: "Chào cháu Lương! Hai cháu cùng nhau học thật tốt nhé, nhớ giúp đỡ ông bà, bố mẹ nữa." },
      { speaker: "Lương", nung: "Vâng ạ! Lương cạm ơn gia. Lương sẹ cộ găng tọoc thẹt giọi.", vi: "Vâng ạ! Cháu cảm ơn bà. Cháu sẽ cố gắng học thật tốt ạ." }
    ],
    tf: [
      { q: "Lương líu hen Mai dân tọi ná thân ràn sày giạ cại cú háu hắt lọm", ans: true, exp: "Lương nhìn thấy Mai đứng trước sân nhà cùng với bà của mình vào buổi sáng." },
      { q: "Ngòn nấy Mai pây chợ Phin hắt lọm them bạn Lương dậu đâu bán", ans: false, exp: "Mai ở nhà giúp bà một chút việc, không đi chợ phiên." },
      { q: "Giạ cại Mai nàu sloóng lan thúc từ sày tọoc thẹt đây them sọi gia đình", ans: true, exp: "Bà nhắc hai bạn cùng học tốt và nhớ giúp đỡ gia đình." }
    ],
    quizzes: [
      { q: "Lương đạ líu hen pấu lậư dân dậu them Mai tọi ná Thân ràn háu hắt lọm?", opts: ["A. Cô, mí cại Mai", "B. Giạ cại Mai", "C. Thày cô giáo", "D. Bạn bè sày lớp"], correct: 1 },
      { q: "Pằn mưng ngằn nấy Mai bó pây chợ Phin lúm mọi Pấu?", opts: ["A. Vị Mai hó dậu nắc", "B. Vị Mai dậu ràn sọi giạ tí vịck", "C. Vị Mai thúc pây tăng ràn tường tọoc Slâu", "D. Vị bân tóc hung bó oc nọc đáy"], correct: 1 },
      { q: "Lương them Mai là pạn hạc sày lớp dậu Trường Tiểu học lậu?", opts: ["A. Trường Tiểu học Trần Phú", "B. Trường Tiêu học Lục Yên", "C. Trường Tiểu học Tân Lĩnh", "D. Trường Tiểu học Bắc Hoa"], correct: 0 },
      { q: "Giạ thặng slóong pấu Lương them Mai cáo mụng lúc Tù nhàng?", opts: ["A. Thúc chịu hó pây chợ Phin lọm", "B. Tù sày tọoc slâu đây them sọi gia đình", "C. Thúc dậu ràn chụng sọi gia", "D. Bó đáy pây cúc sẵm chay pẩu tọọc"], correct: 1 },
      { q: "Lương đạ ọc tha ná hẹn lâu lúc đáy giạ cại Mai tằm tóong them thặng?", opts: ["A. Cộ găng tọoc thẹt giọi them cạm ơn giạ", "B. Bợ bó ró cáng mựng", "C. Bó rạy câu slôn cai bùn kẹ", "D. Sláy Pây cúc sắm luôn, bó túp"], correct: 0 }
    ],
    matchWords: [
      { nung: "Chào", vi: "Lời nói hoặc hành động thể hiện sự lịch sự khi gặp gỡ." },
      { nung: "Pâu pan", vi: "Người cùng học chung một lớp hoặc chơi thân thiết với nhau." },
      { nung: "Chợ Phin", vi: "Phiên chợ họp định kỳ theo ngày của đồng bào vùng cao." },
      { nung: "Mạnh rềng", vi: "Trạng thái cơ thể tốt, không bị ốm đau hay mệt mỏi." },
      { nung: "Giạ", vi: "Người phụ nữ sinh thành ra bố hoặc mẹ của mình." }
    ],
    scrambles: [
      { vi: "Lan chào bà ạ.", words: ["Bà", "ạ", "Lan", "chào"], ans: "Lan chào bà ạ" },
      { vi: "Hai cháu cùng nhau học thật tốt nhé.", words: ["Soóng lan", "cùng nhau", "học", "đê", "ná"], ans: "Soóng lan cùng nhau học đê ná" },
      { vi: "Hôm nay ở nhà mình giúp bà một chút.", words: ["Hôm nay", "dậu làn", "cú", "giúp", "bà", "ý"], ans: "Hôm nay dậu làn cú giúp bà ý" }
    ],
    rewrites: [
      { vi: "Cháu chào bà ạ!", ans: "Lan chào giạ", hint: "Lan chào..." },
      { vi: "Cháu tên là Lương.", ans: "Lan mình là Lương", hint: "Lan mình..." },
      { vi: "Nhà cháu ở bản Bắc Hoa.", ans: "Lan dậu bán Bắc Hoa", hint: "dậu bán..." },
      { vi: "Cháu đi học chữ ở trường.", ans: "Lan pây tọoc slâu dậu ràn tường", hint: "pây tọoc slâu..." },
      { vi: "Cháu rất thích đi học.", ans: "Lan rất ại pây tọoc slâư", hint: "rất ại..." },
      { vi: "Cháu rất thích nói tiếng Nùng.", ans: "Lan rất ại cáng cậu Nòng", hint: "cáng cậu Nòng" },
      { vi: "Bà mời cháu vào nhà ngồi.", ans: "Giạ mời lan hắn ràn nặng", hint: "hắn ràn nặng" },
      { vi: "Hôm nay cháu đi học cùng bạn.", ans: "Ngòn nấy lan pây tọoc slâu them bạn", hint: "them bạn" },
      { vi: "Bà tươi vui chào cháu Lương.", ans: "Gia rìu rọong chào lan Lương", hint: "rìu rọong" },
      { vi: "Cháu học được nhiều chữ mới ở trường.", ans: "Lan tọọc đáy lai slâu dậu ràn tường ang lai", hint: "lai slâu" },
      { vi: "Bà hỏi nhà cháu ở đâu.", ans: "Gia cham ràn lan dậu lậu?", hint: "cham ràn" },
      { vi: "Cháu học chữ ở trường rất là vui.", ans: "Lan tọoc slâu dậu ràn tường ang lai", hint: "ang lai" },
      { vi: "Chào bà, cháu đi học về rồi.", ans: "Chào giạ, lan pây tọoc slâư ma léo", hint: "ma léo" },
      { vi: "Cháu ở nhà giúp bà và rất thích đi học.", ans: "Lan dậu ràn sọi giạ sẹm ại pây tọọc slâu", hint: "sẹm ại" },
      { vi: "Cháu rất thích nói tiếng Nùng.", ans: "Lan ai cáng Nòng", hint: "cáng Nòng" }
    ]
  },
  {
    id: 2,
    title: "Giới thiệu bản thân",
    titleNung: "Giới thiệu bản thân",
    desc: "Cách xưng tên, tuổi, quê quán và giới thiệu bản thân bằng tiếng Nùng An.",
    vocab: [
      { word: "Mình", vi: "Tên", eg: "Mứng mình hén lậu? (Cậu tên gì?)" },
      { word: "Pây", vi: "Tuổi / Năm", eg: "Pây nấy sịp slậy pây (Năm nay 14 tuổi)" },
      { word: "Ràn", vi: "Nhà", eg: "Ràn cú dậu bán (Nhà tôi ở bản)" },
      { word: "Gia đình", vi: "Gia đình", eg: "Sọi gia đình (Giúp gia đình)" },
      { word: "Bạn bè", vi: "Bạn bè", eg: "Tù sày bạn bè" },
      { word: "Ai", vi: "Sở thích / Yêu thích", eg: "Cú ai líu (Tôi thích xem)" },
      { word: "Tom tợc", vi: "Quê hương", eg: "Tom tợc Lục Yên" },
      { word: "Ràn tường", vi: "Trường học", eg: "Pây ràn tường (Đến trường)" }
    ],
    dialogue: [
      { speaker: "Minh", nung: "Sâu Lan bấu? Ngòn nấy mứng sẹm ọc nà sọi gia đình á?", vi: "Lan đấy à? Hôm nay cậu cũng ra ruộng giúp gia đình à?" },
      { speaker: "Lan", nung: "Cú chẳng sợi mí xôông á. À, rạu tù nhàng cấy pày, rạu bó sằng ró mình. Mứng mình hén lậu?", vi: "Mình vừa phụ mẹ xong. À, chúng mình gặp nhau mấy lần rồi mà mình chưa biết tên cậu. Cậu tên gì?" },
      { speaker: "Minh", nung: "Cú mình Minh, pây nấy sịp slậu pây. Lấy mứng?", vi: "Mình tên Minh, năm nay mười bốn tuổi. Còn cậu?" },
      { speaker: "Lan", nung: "Cú là Lan, sém sịp slây Pây. Ràn cú dậu bọng pải kha kìu, cặn toong na cai bán.", vi: "Mình là Lan, cũng mười bốn tuổi. Nhà mình ở phía bên kia con suối, gần khu ruộng của bản." },
      { speaker: "Minh", nung: "A, hén là ràn mứng dậu cặn nấy. Ngòn lâu mứng hám cúc săm nở.", vi: "À, vậy là nhà cậu ở gần đây. Hôm nào có dịp mình sang chơi nhé!" },
      { speaker: "Lan", nung: "Đáy, slầy nấy pây ràn ló, bó mầy gia củ dậu nàn thọi tắng hắu.", vi: "Được! Giờ về thôi, không bà tớ ở nhà lại chờ cơm mất." }
    ],
    tf: [
      { q: "Minh them Lan Tù nhàng hắu hắt lọm lúc pây cần ron tằng ràn tường tọoc slâu.", ans: false, exp: "Hai bạn gặp nhau ngoài ruộng khi đang đi phụ giúp gia đình." },
      { q: "Tằng Minh them Lan pây nấy săm sịp slây Pây, Tù sày cáng có cần hằn nà.", ans: true, exp: "Cả hai bạn đều 14 tuổi và cùng trò chuyện bên bờ ruộng." },
      { q: "Ràn cại Lan dậu bơng pái kha khúi căn nà cại bán.", ans: true, exp: "Nhà Lan ở phía bên kia con suối gần khu ruộng của bản." }
    ],
    quizzes: [
      { q: "Minh them Lan tù nhàng dậu lậu đâu sụ cáng có lúc đang cúc mựng?", opts: ["A. Dậu ràn tường dậu xạ Tân Lĩnh", "B. Dậu ràn văn hoá cai bán", "C. Dậu nóc nà lúc pây sọi cần ràn", "D. Dậu chợ Phin trang xá"], correct: 2 },
      { q: "Lúc đáy cham mình, bạn Lan đạ hồi mình là cáo mưng?", opts: ["A. Bạn cú là Hoa", "B. Bạn cú là Lan", "C. Bạn cú là Mây", "D. Bạn cú là Hương"], correct: 1 },
      { q: "Lúm cậu giới thiệu cai sloóng pấu, tằng Minh them Lan pây nấy cấy lai pây?", opts: ["A. Sịp pây", "B. Sịp nhấy pây", "C. Sịp Slam Pây", "D. Sịp Slậy Pây"], correct: 3 },
      { q: "Ràn cai Lan dậu ạm lậu dậu đâu cậu cáng có?", opts: ["A. Dậu bợng pái kha khúi, căn nà", "B. Dậu hềm ràn cại Minh dậu đâu bán", "C. Dậu trang Xạ Lục Yên", "D. Căn hêm ràn tường cai bán"], correct: 0 },
      { q: "Pần mựng đâu lúc cáng có, Lan thọi vối vàng rô pây ràn sày Minh?", opts: ["A. Vì bân tóc", "B. Vì Lao giạ dậu ràn tắng hắu", "C. Vì Thúc Pây ràn cúc bài tập ma ràn", "D. Vì mí hẹo pât ràn mầy víc"], correct: 1 }
    ],
    matchWords: [
      { nung: "Mình", vi: "Từ dùng để gọi xưng hoặc phân biệt người này với người khác." },
      { nung: "Pây", vi: "Khoảng thời gian tính bằng năm kể từ khi sinh ra cho đến hiện tại." },
      { nung: "Dậu ràn", vi: "Nơi gia đình quây quần sinh sống và gắn bó hằng ngày." },
      { nung: "Gia đình", vi: "Tập hợp những người thân thiết cùng chung sống dưới một mái nhà." },
      { nung: "Tom tợc", vi: "Nơi chốn sinh ra, gắn liền với bản quán và người thân." }
    ],
    scrambles: [
      { vi: "Tên Minh năm nay mười bốn tuổi.", words: ["Mình Minh", "là", "Pây nấy", "Sịp slây", "Pây"], ans: "Mình Minh là Pây nấy Sịp slây Pây" },
      { vi: "Nhà Lan ở phía bên kia cạnh con suối.", words: ["Ràn Lan", "dậu", "bơng Kén", "hêm", "kha khíu"], ans: "Ràn Lan dậu bơng Kén hêm kha khíu" },
      { vi: "Hôm nào có dịp mình sang chơi nhé!", words: ["Ngòn lâu", "mấy dịp", "cú", "hàm cúc sằm", "nớ"], ans: "Ngòn lâu mấy dịp cú hàm cúc sằm nớ" }
    ],
    rewrites: [
      { vi: "Lan đấy à?", ans: "Lan nấy á?", hint: "Lan nấy..." },
      { vi: "Hôm nay cậu cũng ra ruộng à?", ans: "Ngòn nấy mứng sem ọc nà á", hint: "sem ọc nà" },
      { vi: "Mình vừa phụ mẹ xong.", ans: "Cú chẳng sợi mí xôông", hint: "sợi mí" },
      { vi: "Chúng mình gặp nhau mấy lần rồi?", ans: "Rau tù nhàng cấy pày léo?", hint: "cấy pày" },
      { vi: "Mình chưa biết tên cậu.", ans: "Cú bó sằng ro mình mứng", hint: "bó sằng ro" },
      { vi: "Cậu tên là gì?", ans: "Mứng mình cáo mựng?", hint: "cáo mựng" },
      { vi: "Mình tên là Minh.", ans: "Mình cú là Minh", hint: "Mình cú" },
      { vi: "Năm nay mình mười bốn tuổi.", ans: "Pây nây cú sịp Slậy Pây", hint: "sịp Slậy" },
      { vi: "Còn cậu thì sao?", ans: "Lấy mứng hẹn lâu?", hint: "hẹn lâu" },
      { vi: "Nhà mình ở phía bên kia con suối.", ans: "Ràn cú dậu bợng Pại Kha Khúi Kẹn", hint: "Kha Khúi" },
      { vi: "Nhà gần khu ruộng của bản.", ans: "Ràn cú dậu bợng căn nà cại bán", hint: "căn nà" },
      { vi: "Nhà cậu ở gần đây phải không?", ans: "Ràn dậu căn nấy bấu?", hint: "căn nấy" },
      { vi: "Hôm nào có dịp mình sang chơi nhé!", ans: "Ngòn lậu đáy dậu cú hám cúc sằm nó!", hint: "hám cúc sằm" },
      { vi: "Được chứ, giờ về thôi cậu.", ans: "Đáy bấu, Slầy Pây ràn ló", hint: "Slầy Pây" },
      { vi: "Không bà ở nhà lại chờ cơm mất.", ans: "Bó mầy gia dậu ràn Thọi tắng hắu", hint: "tắng hắu" }
    ]
  },
  {
    id: 3,
    title: "Gia đình và người thân",
    titleNung: "Gia đình them hùn ràn",
    desc: "Từ ngữ về các thành viên gia đình, kính trọng ông bà và giữ gìn câu hát Phưn.",
    vocab: [
      { word: "Tê, Kẹ", vi: "Ông", eg: "Tê đang lận có (Ông đang kể chuyện)" },
      { word: "Ché", vi: "Chị gái", eg: "Ché Mai ời" },
      { word: "Núng slai", vi: "Em trai", eg: "Núng slai cham ché" },
      { word: "Ràn", vi: "Gia đình / Nhà", eg: "Hùn ràn (Người thân)" },
      { word: "Hùn ràn", vi: "Người thân trong nhà", eg: "Tù sày hùn ràn" },
      { word: "Lan nọi", vi: "Cháu nội", eg: "Lan nọi cại tê" },
      { word: "Pan", vi: "Thế hệ", eg: "Pan lăng (Thế hệ sau)" },
      { word: "Cậy tạo", vi: "Ký ức", eg: "Cậy tạo ngày trước" }
    ],
    dialogue: [
      { speaker: "Núng slai", nung: "Núng bạo ché Mai ời, tê đang lận có mựng dé?", vi: "Chị Mai ơi, ông đang kể chuyện gì vậy?" },
      { speaker: "Mai", nung: "Tê đang lận hấư pây núng rau táy câu hẹo Phưn cại bùn nòng rau.", vi: "Ông đang kể cho chị em mình nghe về những câu hát Phưn của người Nùng đấy." },
      { speaker: "Tê", nung: "Ngòn cọn Tê hay đáy rạy các có, ché đâu bán hẹo Phưn háu ngòn đây.", vi: "Ngày trước, ông thường nghe các anh chị trong bản hát Phưn vào những dịp vui. Những câu hát rất hay và ý nghĩa." },
      { speaker: "Núng slai", nung: "Tê ời, tê rọ hẹo bầu?", vi: "Ông ơi, ông có biết hát không ạ?" },
      { speaker: "Tê", nung: "Rọ dế, lúc lấy ụn, tê săm đáy slôn hẹo Phưn Them Các Kẹ đâu bán.", vi: "Biết chứ! Khi còn trẻ, ông cũng từng học hát từ các cụ trong bản." },
      { speaker: "Mai", nung: "Tê ời, tê hẹo hấu bọn lan ráy câu nứng đáy bấu?", vi: "Ông ơi, ông hát cho chúng cháu nghe một câu được không ạ?" },
      { speaker: "Tê", nung: "Đáy dế, các lan từ sày rạy Thêm giợ cậu Phưn cại hùn nòng rạu nó.", vi: "Được chứ. Các cháu hãy cùng nghe và giữ gìn những câu hát của người Nùng mình nhé." }
    ],
    tf: [
      { q: "Cong tê đang lận hấư Mai them nưng bạo ma cậu Phưn truyền thống.", ans: true, exp: "Người ông đang kể cho Mai và em trai nghe về câu hát Phưn." },
      { q: "Ngòn cọn lúc lấy ụn, tê bó đáy hạc hèo sày pùn kẹ đơ bán", ans: false, exp: "Khi còn trẻ, ông từng học hát Phưn từ các cụ trong bản." },
      { q: "Tê nàu các lan tù sày ray Them ro các giợ cậu Phưn cai hùn nòng.", ans: true, exp: "Ông dặn các cháu cùng nghe và gìn giữ câu hát Phưn." }
    ],
    quizzes: [
      { q: "Đâu cậu có núng slai cham ché Mai vịc mựng?", opts: ["A. Tê đang lận có cao mựng dè?", "B. Ngòn nấy ché pây lậu", "C. Cấy slầy chí rau Pây nìn", "D. Pân lậu đang dân dậu Pắc tâu xạ"], correct: 0 },
      { q: "Tê đang lận có hấư slóóng pây nưng ma câu hèo lậu cại hùn nòng?", opts: ["A. Cậu hát ú nùng", "B. Cậu hèo Phưn truyền thống", "C. Điệu múa sạp đây lai", "D. Những làn điệu lượn khắp cọi"], correct: 1 },
      { q: "Rừng cậu cại kẹ ngòn mớ kẹ đáy rạy pấu lự hèo phưn hắu các dịp đây?", opts: ["A. Học sinh đâu lớp", "B. Cô giáo dậu trường", "C. Có, ché đâu bán", "D. Hùn dậu bán bợng hềm"], correct: 2 },
      { q: "Đáy lan bạo cham, kẹ đạ cáng cáo mựng ma khả năng hèo cại rạu?", opts: ["A. Tê bó rọ hẹo", "B. Tê chị ró ráy rọ", "C. Tê ro hát dễ", "D. Ngòn sọc tê hẹo hấư ray"], correct: 2 },
      { q: "Sụ thưng cáng có thầy tê thặng các lan cáo mựng rất quan trọng them ý nghĩa?", opts: ["A. Thúc tọọc slâư thẹt giọi", "B. Thúc ọc tọong soi hùn ràn", "C. Giợ cậu Phưn hùn nòng", "D. Thúc Pây nìn lọm chụng rọong hận lọm"], correct: 2 }
    ],
    matchWords: [
      { nung: "Tê, Kẹ", vi: "Người sinh ra bố hoặc mẹ, là bậc cao niên đáng kính trong nhà." },
      { nung: "Ràn", vi: "Tập hợp những người thân thiết cùng chung sống dưới một mái nhà." },
      { nung: "Hùn ràn", vi: "Những người có quan hệ họ hàng, máu mủ hoặc gắn bó ruột thịt." },
      { nung: "Lan", vi: "Người thuộc thế hệ nhỏ tuổi hơn trong gia đình đối với ông bà, cha mẹ." },
      { nung: "Pan", vi: "Nhóm những người cùng chung khoảng thời gian sinh sống và độ tuổi." }
    ],
    scrambles: [
      { vi: "Ông đang kể chuyện gì vậy?", words: ["Tê", "đang", "lận có", "mưng", "nó"], ans: "Tê đang lận có mưng nó" },
      { vi: "Nghe những câu hát Phưn của người Nùng.", words: ["Rạy", "cậu hẹo", "Phưn", "dậu", "hùn Nòng"], ans: "Rạy cậu hẹo Phưn dậu hùn Nòng" },
      { vi: "Cháu hãy giữ những câu hát đẹp này!", words: ["Lan", "giợ", "nhưng", "cậu hẹo", "đây"], ans: "Lan giợ nhưng cậu hẹo đây" }
    ],
    rewrites: [
      { vi: "Chị Mai ơi!", ans: "Ché mai ời", hint: "Ché mai" },
      { vi: "Ông đang kể chuyện gì vậy?", ans: "Tê đang lận có mựng?", hint: "lận có" },
      { vi: "Ông đang kể chuyện cho nghe.", ans: "Tê đang lận có hấu ray", hint: "hấu ray" },
      { vi: "Đó là câu hát Phưn của người Nùng.", ans: "Nấy là cậu hèo Phưn cai hùn nòng", hint: "hèo Phưn" },
      { vi: "Ngày trước ông nghe ai hát?", ans: "Ngòn cọn ní tê rạy Pầu lậu hẹo?", hint: "Pầu lậu" },
      { vi: "Ông nghe các anh chị trong bản hát.", ans: "Tê rạy các có, ché đâu bán hẹo", hint: "các có, ché" },
      { vi: "Vào những dịp vui của bản.", ans: "Hầu nhưng dịp vịc đây cại bán", hint: "vực đây" },
      { vi: "Những câu hát rất hay và ý nghĩa.", ans: "Nhựng cậu hát rất đây them ý nghĩa", hint: "rất đây" },
      { vi: "Ông ơi, ông có biết hát không?", ans: "Tê ời, tê rọ hẹo bấu?", hint: "rọ hẹo" },
      { vi: "Ông biết chứ!", ans: "Tê nọ dế!", hint: "nọ dế" },
      { vi: "Khi còn trẻ ông cũng học hát.", ans: "Lúc lấy un tê sặm học hẹo Phưn", hint: "lấy un" },
      { vi: "Học hát từ các cụ trong bản.", ans: "Hạc Them hùn Kẹ đâu bán", hint: "hùn Kẹ" },
      { vi: "Ông hát cho chúng cháu nghe nhé.", ans: "Tê hẹo hấu bon lan ráng nó", hint: "bon lan" },
      { vi: "Các cháu hãy cùng nghe ông hát.", ans: "Các lan tù sùng rạng tê hẹo", hint: "tù sùng" },
      { vi: "Hãy cùng nhau giữ gìn câu hát.", ans: "Tù sày giơ gìn câu hẹo Phưn", hint: "giơ gìn" }
    ]
  },
  {
    id: 4,
    title: "Bạn bè và giao tiếp hằng ngày",
    titleNung: "Bạn bè them giao tiếp hằng ngoằn",
    desc: "Giao tiếp bạn bè, rủ nhau đi lễ hội đền Đại Cại và chơi ném còn.",
    vocab: [
      { word: "Cáng có", vi: "Giao tiếp / Trò chuyện", eg: "Rạu cáng có" },
      { word: "Bạn bè", vi: "Bạn bè", eg: "Bạn bè sày lớp" },
      { word: "Lễ hội", vi: "Lễ hội", eg: "Lễ hội đền Tái Cại" },
      { word: "Văn hóa", vi: "Văn hóa", eg: "Văn hóa Nòng" },
      { word: "Đò Tén", vi: "Trang phục", eg: "Đò tén truyền thống" },
      { word: "Hẹn nhàng", vi: "Hẹn gặp", eg: "Hẹn nhàng dậu hội" },
      { word: "Tức tom", vi: "Ném còn", eg: "Cúc sàm tức tom" },
      { word: "Pú rạ", vi: "Quần áo thổ cẩm", eg: "Pú rạ hùn Nòng" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Lan ời, mứng đáy pây hội đền Tái Cại dậu Tân Lĩnh bó sằng?", vi: "Lan ơi, cậu đã từng đi Lễ hội đền Đại Cại ở Tân Lĩnh chưa?" },
      { speaker: "Lan", nung: "Bó sằng, cú đáy rạy cáng hội nấy mồng lai cáo cúc sằm Them văn nghệ rất đông.", vi: "Chưa, nhưng mình nghe nói lễ hội này có nhiều trò chơi dân gian và hoạt động văn nghệ rất vui." },
      { speaker: "Mai", nung: "Hen Tuần nấy pây rừng cú nó! Cú lấy ai líu lai tiết mục văn hóa cai hùn Nòng.", vi: "Vậy cuối tuần này đi cùng mình nhé! Mình còn muốn xem các tiết mục mang nét văn hóa của người Nùng." },
      { speaker: "Lan", nung: "Đáy dế! Cú sằm ai nọ văn hoá Nòng, nhất là hèo phưn Them Pú rạ.", vi: "Được chứ! Mình rất thích tìm hiểu văn hóa Nùng, nhất là những làn điệu dân gian và trang phục truyền thống." },
      { speaker: "Mai", nung: "Đây lai! Cạm ơn mứng dạ pây sảy cú. À cây Pây lóm, cú lấy ai cúc sàm Tức tom.", vi: "Tuyệt quá! Cảm ơn bạn đã đi cùng mình. À nhớ đến sớm nhé, mình còn muốn tham gia trò chơi ném còn." },
      { speaker: "Lan", nung: "Nhất định nó, Hẹn nhàng mứng dậu hội Tái Cại.", vi: "Nhất định rồi. Hẹn gặp bạn ở Lễ hội đền Đại Cại!" }
    ],
    tf: [
      { q: "Mai sặu Lan sảy Pây hội đền Tải Cại dậu Tân Lĩnh hắn cuối Tuần.", ans: true, exp: "Mai rủ Lan cùng đi Lễ hội đền Đại Cại ở Tân Lĩnh vào cuối tuần." },
      { q: "Lan đụ pây hội đền Tái Cại lai pày cọn đáy Mai sặu pây sày.", ans: false, exp: "Lan chưa từng đi nhưng có nghe nói tới lễ hội này." },
      { q: "Mai Thăng Lan cậy Tằng lọm Slóong pấu Tù sày Tức Tọm.", ans: true, exp: "Mai dặn Lan đến sớm để hai bạn cùng chơi ném còn." }
    ],
    quizzes: [
      { q: "Đâư sụ cáng có Mai sạu Lan pây líu cao mưng dậ Xạ Tân Lĩnh?", opts: ["A. Hội đền Tái Cại", "B. Phin chợ ngòn ching", "C. Hội thi thể thao cui ràn Tường", "D. Giao lưu văn nghệ đâu bán"], correct: 0 },
      { q: "Lan Lấn rau đạ pây hội đền Tái Cại bó sằng?", opts: ["A. Pây léo Them vui vẻ lai", "B. Bó sằng Pây nhưng đáy rạy tằng", "C. Pây sày bùn rùn tăm con", "D. Bó ró tắc tí mà lễ hội"], correct: 1 },
      { q: "Mai ai Them Lan líu các Tiết mục Tầu nét văn hón Pấu lậu?", opts: ["A. Văn hóa bùn Kêu", "B. Văn hóa cai bùn Nòng", "C. Văn hóa cai bùn Tày", "D. Văn hóa cai bùn Sạ"], correct: 1 },
      { q: "Ngoài việc xem văn nghệ, Lan còn rất thích tìm hiểu thêm những điều gì?", opts: ["A. Các món cân đặc sản cai địa Phương", "B. Làn điệu xíu mớ them cân tén", "C. Cách đăm báu nà cần ráy", "D. Cậu có cúc păn cai ngôi đền"], correct: 1 },
      { q: "Lăng sú cáng có, Mai Thăng Lan cáo mựng chung Tù Sày Pây hội?", opts: ["A. Cây tầu lứng them pú nít", "B. Cây pây lóm lấy tức tọm", "C. Tầu đò cân pây rừng", "D. Sặu them lai bạn sày pây"], correct: 1 }
    ],
    matchWords: [
      { nung: "Bạn bè", vi: "Những người có mối quan hệ gắn bó, thân thiết và chia sẻ với nhau." },
      { nung: "Cáng có", vi: "Hoạt động trao đổi thông tin, trò chuyện qua lại giữa người với người." },
      { nung: "Lễ hội", vi: "Sự kiện văn hóa cộng đồng diễn ra với nhiều hoạt động vui chơi, nghi lễ." },
      { nung: "Văn hóa", vi: "Những giá trị tinh thần, truyền thống lâu đời được lưu truyền lại." },
      { nung: "Đò tén", vi: "Quần áo và các đồ mặc truyền thống đặc trưng của dân tộc." }
    ],
    scrambles: [
      { vi: "Bạn đi Lễ hội đền Đại Cại chưa?", words: ["Ban", "pây", "Lễ hội", "đền Tái Cại", "bó săng"], ans: "Ban pây Lễ hội đền Tái Cại bó săng" },
      { vi: "Mình đi cùng nhé cuối tuần này!", words: ["Nớ", "pây sày", "thưng", "tuần nấy", "nó"], ans: "Nớ pây sày thưng tuần nấy nó" },
      { vi: "Mình muốn đi chơi ném còn.", words: ["Cú", "soòng pây", "lĩu", "còn"], ans: "Cú soòng pây lĩu còn" }
    ],
    rewrites: [
      { vi: "Lan ơi!", ans: "Lan ời!", hint: "Lan ời" },
      { vi: "Cậu đi hội đền chưa?", ans: "Mứng Pây hội đền bó Sẵng?", hint: "bó Sẵng" },
      { vi: "Lễ hội đền Đại Cại ở Tân Lĩnh.", ans: "Lễ hội đền Tái Cại Tân Lĩnh.", hint: "đền Tái Cại" },
      { vi: "Mình chưa đi bao giờ.", ans: "Cú bó sằng Pây Tắc pày.", hint: "Tắc pày" },
      { vi: "Lễ hội có nhiều trò chơi vui.", ans: "Lễ hội mồng lai Trò cúc sằm đây.", hint: "cúc sằm" },
      { vi: "Cuối tuần này đi cùng mình nhé.", ans: "Cuối Tuần nấy pây sày cú nó!", hint: "pây sày" },
      { vi: "Mình muốn xem văn hóa người Nùng.", ans: "Cú ai líu văn hóa hùn Nòng.", hint: "ai líu" },
      { vi: "Được chứ, mình rất thích.", ans: "Đáy dễ, cú săm ai.", hint: "săm ai" },
      { vi: "Thích tìm hiểu làn điệu dân gian.", ans: "Thích chàm lĩu các điệu sli, then.", hint: "điệu sli" },
      { vi: "Thích cả trang phục truyền thống.", ans: "Thích cà pú vạ truyền thống.", hint: "pú vạ" },
      { vi: "Tuyệt quá, cảm ơn bạn nhiều.", ans: "Đê lai, ló ơn láu tòng lai.", hint: "Đê lai" },
      { vi: "Nhớ đến sớm nhé cậu.", ans: "Nin mạ sáo ná câu.", hint: "Nin mạ" },
      { vi: "Mình rất mong được tham gia lễ hội cùng bạn.", ans: "Cú soòng pây lĩu hội cùng láu tòng.", hint: "soòng pây" },
      { vi: "Chúng mình có thể cùng xem các tiết mục văn nghệ.", ans: "Bon cú đắc cùng lĩu văn nghệ.", hint: "lĩu văn nghệ" },
      { vi: "Mình nghe nói lễ hội còn có nhiều hoạt động thú vị.", ans: "Cú láy vạ lễ hội còn mầy lai trò lĩu đê.", hint: "lĩu đê" }
    ]
  },
  {
    id: 5,
    title: "Số đếm và thời gian",
    titleNung: "Số kę them ngòn slầy",
    desc: "Đếm số, hẹn giờ và tìm hiểu lịch sử chợ đá quý miền đất Ngọc Lục Yên.",
    vocab: [
      { word: "Ngòn slấy", vi: "Thời gian", eg: "Ngòn slấy trôi qua" },
      { word: "Số kẹ", vi: "Số đếm", eg: "Tọoc số kẹ" },
      { word: "Ngòn", vi: "Ngày", eg: "Ngòn nấy (Hôm nay)" },
      { word: "Tuần", vi: "Tuần", eg: "Tuần nấy (Tuần này)" },
      { word: "Đưn", vi: "Tháng", eg: "Đưn nấy (Tháng này)" },
      { word: "Pây", vi: "Năm", eg: "Pây 1989" },
      { word: "Chợ Thin quậy", vi: "Chợ đá quý", eg: "Chợ thin quậy Lục Yên" },
      { word: "Lán pòn", vi: "Phát triển", eg: "Chợ phát triển lai" }
    ],
    dialogue: [
      { speaker: "Minh", nung: "An ời, Rau tù hẹn lúc pẹt giờ dậu chợ thin quậy Lục Yên nó!", vi: "An ơi, mình hẹn nhau lúc 8 giờ ở Chợ đá quý Lục Yên nhé?" },
      { speaker: "An", nung: "Đáy! Cú sẹm ại líu khón thin đô màu sắc bày bai dậu chợ.", vi: "Được! Mình muốn xem những viên đá đủ màu sắc được bày bán ở chợ." },
      { speaker: "Minh", nung: "Nứng ró nghề thin quậy dậu Lục Yên tắm khoạng pây 1989 bấu?", vi: "Bạn có biết nghề đá quý ở Lục Yên bắt đầu phát triển từ khoảng năm 1989 không?" },
      { speaker: "An", nung: "Ro, Tăng khoạng 1991-1992, chợ thin quậy phát triển lai.", vi: "Có, đến khoảng 1991–1992, chợ đá quý đã phát triển rất mạnh." },
      { speaker: "Minh", nung: "Hén rạu pây tăng lọm nó, cú lấy ại líu pâu thợ cúc chẹng thin quậy.", vi: "Vậy mình đến sớm nhé, mình còn muốn xem những người thợ làm tranh đá quý." },
      { speaker: "An", nung: "Hen pây ló, cụ ại líu tắm kẹn “miền đất Ngọc” cúc pẵn các tác phậm hẹn lậu.", vi: "Vậy đi thôi, mình muốn tận mắt xem miền đất Ngọc tạo nên những tác phẩm ấy như thế nào." }
    ],
    tf: [
      { q: "Cú them An tù hẹn nhàng háu lúc pẹt giờ lọm dậu chợ thin quậy.", ans: true, exp: "Minh và An hẹn nhau lúc 8 giờ sáng tại Chợ đá quý Lục Yên." },
      { q: "Nghề thin quậy dậu Lục Yên phát triển tắm pây 1980.", ans: false, exp: "Nghề đá quý Lục Yên bắt đầu phát triển từ khoảng năm 1989." },
      { q: "An ại líu nhựng pấu thợ cúc chẹng thin quậy dậu miền đất Ngọc.", ans: true, exp: "An rất muốn xem người thợ làm tranh đá quý tại miền đất Ngọc." }
    ],
    quizzes: [
      { q: "Minh them An hẹn tù nhùng dậu chợ thin quậy hắn cấy giờ?", opts: ["A. Hắn 7 giờ lọm ngòn nấy", "B. Hắn 8 giờ dậu khu chợ", "C. Hắn 9 giờ dậu ràn văn hóa", "D. Hắn 10 giờ dậu ngã Slám bán"], correct: 1 },
      { q: "An muốn đến chợ đá quý để xem những viên đá có đặc điểm gì nổi bật?", opts: ["A. Nhưng khón thin mây hình lạc", "B. Nhưng khón thin đô màu sắc", "C. Nhựng khón thin quậy hiếm nhất", "D. Nhưng khón thin hung lai"], correct: 1 },
      { q: "Minh nhắc đến mốc thời gian khoảng năm nào là lúc nghề đá quý bắt đầu phát triển?", opts: ["A. Khoạng pây 1985", "B. Khoạng pây 1989", "C. Khoạng pây 1995", "D. Khoạng pây 2000"], correct: 1 },
      { q: "Vào giai đoạn nào thì chợ đá quý Lục Yên đã phát triển rất mạnh mẽ?", opts: ["A. Khoạng pây 1991-1992", "B. Khoạng pây 1993-1994", "C. Khoạng pây 1995-1996", "D. Khoạng pây 1997-1998"], correct: 0 },
      { q: "An ại líu chen thu “miền đất Ngọc cúc pằn dóng mựng dậu chợ?", opts: ["A. Cạo đò cúc bằng ngắn", "B. Nhưng cheng thin quậy đây", "C. Nhưng đò điêu khắc bằng máy", "D. Các loại ná đa tắm mầu"], correct: 1 }
    ],
    matchWords: [
      { nung: "Ngòn slấy", vi: "Khoảng thời gian cụ thể hoặc độ dài diễn ra các hoạt động hằng ngày." },
      { nung: "Chợ thin quậy", vi: "Nơi diễn ra các hoạt động mua bán, trao đổi các loại đá quý tự nhiên." },
      { nung: "Màu slắc", vi: "Sắc thái phong phú, đa dạng của các vật thể nhìn thấy bằng mắt." },
      { nung: "Lán pàn", vi: "Sự lớn mạnh, vươn lên và mở rộng của một ngành nghề hay địa phương." },
      { nung: "Chẹng thin quậy", vi: "Loại hình tranh nghệ thuật độc đáo được ghép từ những mảnh đá quý." }
    ],
    scrambles: [
      { vi: "Hẹn nhau lúc 8 giờ ở Chợ đá quý Lục Yên!", words: ["Tù hẹn", "hắn 8 slầy", "dậu", "Chợ Thin quậy", "Lục Yên"], ans: "Tù hẹn hắn 8 slầy dậu Chợ Thin quậy Lục Yên" },
      { vi: "Đá quý Lục Yên phát triển từ khoảng năm 1989.", words: ["Quậy Lục Yên", "Pẹ Pàn", "Tăm", "Khoạng Pây", "1989"], ans: "Quậy Lục Yên Pẹ Pàn Tăm Khoạng Pây 1989" },
      { vi: "Mình đến chợ đá quý sớm nhé.", words: ["Rạu", "pây tăng", "lọm", "chợ thin", "quậy"], ans: "Rạu pây tăng lọm chợ thin quậy" }
    ],
    rewrites: [
      { vi: "An ơi!", ans: "An ời!", hint: "An ời" },
      { vi: "Hẹn nhau lúc 8 giờ nhé.", ans: "Tù hẹn hắn 8 giờ nó.", hint: "8 giờ nó" },
      { vi: "Gặp nhau ở chợ đá quý.", ans: "Tù nhàng dậu chợ Thin quậy.", hint: "chợ Thin quậy" },
      { vi: "Chợ đá quý ở Lục Yên.", ans: "Chợ Thin quậy dậu Lục Yên.", hint: "dậu Lục Yên" },
      { vi: "Mình muốn xem những viên đá.", ans: "Cú ại líu nhựng Khón Thin quậy.", hint: "Khón Thin" },
      { vi: "Đá có đủ các màu sắc đẹp.", ans: "Thin mầy lai màu sắc đảy.", hint: "màu sắc" },
      { vi: "Đá được bày bán ở chợ.", ans: "Thin đáy bày dậu Chợ.", hint: "bày dậu Chợ" },
      { vi: "Cậu có biết nghề đá quý không?", ans: "Mứng nó nghề Thin quậy bấu?", hint: "nghề Thin" },
      { vi: "Nghề đá quý phát triển từ khi nào?", ans: "Nghề Thin quậy Pé Pàn tắm lúc lậu?", hint: "Pé Pàn" },
      { vi: "Bắt đầu từ khoảng năm 1989.", ans: "Tắm Khoạng Pây 1989.", hint: "Pây 1989" },
      { vi: "Chợ phát triển rất mạnh sau đó.", ans: "Húm lằng chợ Pé Pàn lai.", hint: "Húm lằng" },
      { vi: "Mình muốn đến chợ thật sớm.", ans: "Cú ại tăng chợ Thịt Lọm.", hint: "Thịt Lọm" },
      { vi: "Muốn xem thợ làm tranh đá quý.", ans: "Ai lìu Thợ cúc chẹng Thin quậy.", hint: "chẹng Thin" },
      { vi: "Miền đất Ngọc Lục Yên đẹp quá.", ans: "Miền Đất Ngọc Lục Yên đây lai.", hint: "đây lai" },
      { vi: "Vậy chúng ta đi thôi nào.", ans: "Hẹn rau tù sày pây ló.", hint: "pây ló" }
    ]
  },
  {
    id: 6,
    title: "Ăn uống",
    titleNung: "Ăn uống",
    desc: "Ẩm thực truyền thống: bánh chưng đen, xôi ngũ sắc, cá suối và rau rừng.",
    vocab: [
      { word: "Phắng đăm", vi: "Bánh chưng đen", eg: "Sớ phắng đăm" },
      { word: "Hắn nắng ngọ slắc", vi: "Xôi ngũ sắc", eg: "Cân hắn nắng ngọ slắc" },
      { word: "Pa khúi", vi: "Cá suối", eg: "Món pa khúi" },
      { word: "Nòng", vi: "Măng", eg: "Nòng đong pha" },
      { word: "Phắc đong", vi: "Rau rừng", eg: "Phắc đong ngon" },
      { word: "Nó mâu bán", vi: "Thịt lợn bản", eg: "Nó mâu bán thơm" },
      { word: "Ton hắn", vi: "Bữa cơm", eg: "Ton hắn đâu ràn cạc" },
      { word: "Món câu", vi: "Món ăn", eg: "Món câu truyền thống" }
    ],
    dialogue: [
      { speaker: "Lan", nung: "Ngòn nấy tằng sằng cú, mứng sớ phăng đăm nó! Nấy là péng đặc biệt cại hùn Nòng An.", vi: "Hôm nay đến nhà mình, cậu thử bánh chưng đen nhé! Đây là món bánh rất đặc biệt của người Nùng An." },
      { speaker: "Mai", nung: "Péng mầy màu đăm thẹt lạc! Nọc phăng đăm, hùn Nòng An lấy mầy cáo mựng ngon?", vi: "Bánh có màu đen thật lạ! Ngoài bánh chưng đen, người Nùng An còn có món gì ngon nữa?" },
      { speaker: "Lan", nung: "Mầy hắn nắng ngo Slắc, nó mâu bán, pa khuế, cạy tớn them các dong phắc, nòng cại đong pha.", vi: "Có xôi ngũ sắc, thịt lợn bản, cá suối, gà rừng và những món rau, măng của núi rừng." },
      { speaker: "Mai", nung: "Rạy hắn rừ lai, cú ại cân tọn hắn lúm hẹn nấy, vờ mầy món ngon, vờ đáy nặng đâu ràn cạc rạy mọi pầu lận có.", vi: "Nghe hấp dẫn quá! Mình thích những bữa cơm như thế này, vừa có món ngon, vừa được ngồi trong nhà sàn nghe mọi người kể chuyện." },
      { speaker: "Lan", nung: "Hẹn pây lăng ma bán cú nó, lây lai dọng cân them cậu có ma hùn Nòng An đang tằng mứng ma ra.", vi: "Vậy lần sau về bản với mình nhé, còn nhiều món ăn và câu chuyện về người Nùng An đang chờ cậu khám phá!" }
    ],
    tf: [
      { q: "Phắng đăm là món cân đặc biệt cại hùn Nòng An.", ans: true, exp: "Bánh chưng đen là món ăn đặc trưng của người Nùng An." },
      { q: "Lan lận có them Mai lai món cân từ đong pha.", ans: true, exp: "Lan giới thiệu nhiều món ăn từ núi rừng cho Mai." },
      { q: "Mai bó ại nhựng ton hắn cân dậu đâu ràn cạc.", ans: false, exp: "Mai rất thích ngồi trong nhà sàn ăn cơm và nghe kể chuyện." }
    ],
    quizzes: [
      { q: "Lan mời Mai sớ món câu lậu lúc tàn rằng rạu?", opts: ["A. Hắn nắng ngọ slắc", "B. Phắng đăm", "C. Pa khúi", "D. Cạy tớn"], correct: 1 },
      { q: "Rừng Lan, hùn Nòng An lấy mầy nhựng món câu lậu?", opts: ["A. Phở, bánh cuốn và nem", "B. Pa pẹ, cụng them pau", "C. Hắn nắng ngọ slắc, pa khúi them nòng", "D. Bánh mì, thịt bò và xúc xích"], correct: 2 },
      { q: "Mai hen hin lậu lúc rạy Lan lận món câu?", opts: ["A. Buồn và thất vọng", "B. Ngạc nhiên và thích thú", "C. Lo lắng và sợ hãi", "D. Không quan tâm"], correct: 1 },
      { q: "Mai ại cáo mựng đâu món cân ton hắn đáy cóng tằng?", opts: ["A. Mầy lai món cân hiện tại", "B. Đáy cại cân", "C. Vờ cân vờ đáy ray lận có", "D. Đáy pây chợ Phin"], correct: 2 },
      { q: "Lăn ại Mai cúc mựng hẳn pày lăng?", opts: ["A. Sày Lan hắn bán", "B. Sày Lan pây chợ", "C. Sày Lan hầu thành phố", "D. Sày Lan pây tằng ràn tường"], correct: 0 }
    ],
    matchWords: [
      { nung: "Phắng đăm", vi: "Món bánh truyền thống có màu đen, gắn với văn hóa người Nùng An." },
      { nung: "Hắn nắng ngọ slắc", vi: "Món xôi nhiều màu sắc, thường xuất hiện trong những dịp đặc biệt của đồng bào." },
      { nung: "Pa Khúi", vi: "Loại cá sinh sống trong các con suối, thường được chế biến trong bữa cơm bản." },
      { nung: "Nòng", vi: "Loại thực phẩm lấy từ những cây tre, nứa non và được chế biến thành món ăn." },
      { nung: "Phắc đong", vi: "Những loại rau tự nhiên được người dân hái từ núi rừng." }
    ],
    scrambles: [
      { vi: "Bánh chưng đen là món ăn truyền thống của người Nùng An.", words: ["Phắng đăm", "hẹn món câu", "truyền thống", "cai hùn", "Nòng An"], ans: "Phắng đăm hẹn món câu truyền thống cai hùn Nòng An" },
      { vi: "Mai rất thích những bữa cơm trong nhà sàn.", words: ["Mai", "rất ại", "nhựng tọn cân", "đâu vàn cại"], ans: "Mai rất ại nhựng tọn cân đâu vàn cại" },
      { vi: "Lần sau cậu về bản với mình nhé.", words: ["Pày lăn", "mứng", "háu bán", "them các", "nó"], ans: "Pày lăn mứng háu bán them các nó" }
    ],
    rewrites: [
      { vi: "Hôm nay cậu thử bánh chưng đen nhé!", ans: "Ngòn nấy mứng sợ phăng đăm nó!", hint: "phăng đăm" },
      { vi: "Đây là món bánh rất đặc biệt của người Nùng An.", ans: "Nấy là món câu đặc biệt cại hùn Nòng An.", hint: "món câu" },
      { vi: "Bánh có màu đen thật lạ!", ans: "Phắng mầy màu đăm thẹt lạc.", hint: "màu đăm" },
      { vi: "Người Nùng An còn có món gì ngon nữa?", ans: "Hùn Nòng An lấy cạo mựng ngon them?", hint: "ngon them" },
      { vi: "Có xôi ngũ sắc và cá suối.", ans: "Mầy hắn nắng ngọ slắc them pa khíu.", hint: "hắn nắng" },
      { vi: "Món ăn này rất hấp dẫn.", ans: "Món cân nấy rất hấp dẫn.", hint: "rất hấp dẫn" },
      { vi: "Mình thích những bữa cơm như thế này.", ans: "Cú ại nhựng tọn hắu hen nấy.", hint: "tọn hắu" },
      { vi: "Bữa cơm có nhiều món ăn ngon.", ans: "Tọn hắu mây lai món ngon.", hint: "lai món ngon" },
      { vi: "Mình thích ngồi trong nhà sàn.", ans: "Cú ại nặng đâu ràn cạc.", hint: "nặng đâu" },
      { vi: "Mọi người thường kể chuyện trong bữa cơm.", ans: "Mọi pẩu hay lận có đâu tọn cân.", hint: "lận có" },
      { vi: "Người Nùng An có nhiều món ăn truyền thống.", ans: "Hùn Nòng An mầy lai món cân truyền thống.", hint: "món cân" },
      { vi: "Rau và măng được lấy từ núi rừng.", ans: "Phắc Them nòng đáy an dậu đâu đong pha.", hint: "đong pha" },
      { vi: "Lần sau cậu về bản với mình nhé!", ans: "Pây lăng mứng ma bán them cú nó!", hint: "ma bán" },
      { vi: "Còn nhiều món ăn đang chờ cậu khám phá.", ans: "Lấy lai món cân đang tắng mứng khám phá.", hint: "khám phá" },
      { vi: "Mình rất thích những món ăn truyền thống của người Nùng An.", ans: "Cú rất ại món cân truyền thống cại hùn Nòng An.", hint: "rất ại" }
    ]
  },
  {
    id: 7,
    title: "Đi chợ – mua bán",
    titleNung: "Pây chợ - hai slấu",
    desc: "Cách hỏi giá, mặc cả và chọn mua khăn thổ cẩm thủ công truyền thống.",
    vocab: [
      { word: "Căn truyền thống", vi: "Khăn truyền thống", eg: "Bâu căn truyền thống" },
      { word: "Cúc bặng mầu", vi: "Làm thủ công", eg: "Căn cúc bặng mầu" },
      { word: "Giạ / Giụ", vi: "Giá cả", eg: "Giạ cấy lai? (Giá bao nhiêu?)" },
      { word: "Sấu / Slấu", vi: "Mua", eg: "Núng sấu căn (Em mua khăn)" },
      { word: "Hai", vi: "Bán", eg: "Pấu hai (Người bán)" },
      { word: "Bọt giụ", vi: "Bớt giá", eg: "Bọt giụ tí lé" },
      { word: "Họ", vi: "Gói lại", eg: "Ché họ hấu núng" },
      { word: "Cúc quà", vi: "Làm quà", eg: "Au pây cúc quà" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Ché ời, bâu căn nấy đây quạ! Nấy số ư căn truyền thống cại hùn Nòng An bấu?", vi: "Chị ơi, chiếc khăn này đẹp quá! Đây có phải khăn truyền thống của người Nùng An không ạ?" },
      { speaker: "Người bán", nung: "Sấu lố, căn nấy đáy cục bằng mầu, núng ại líu kị hơn bấu?", vi: "Đúng rồi, khăn được làm thủ công, em có muốn xem kỹ hơn không?" },
      { speaker: "Mai", nung: "Ai dế, bâu căn nấy giạ cấy lai, ché?", vi: "Có ạ! Chiếc khăn này giá bao nhiêu, chị?" },
      { speaker: "Người bán", nung: "Bâu nấy giạ pạc xin lé.", vi: "Chiếc này giá một trăm nghìn đồng." },
      { speaker: "Mai", nung: "Núng sâu sloóng bâu chí ché bớt hấư núng đáy bấu?", vi: "Nếu em mua hai chiếc thì chị có thể bớt một chút được không ạ?" },
      { speaker: "Người bán", nung: "Đáy dé, sloóng bâu ché an pạc pẹp sịp xin nó!", vi: "Được chứ, hai chiếc chị lấy một trăm tám mươi nghìn nhé!" },
      { speaker: "Mai", nung: "Hẹn ché họ hấu nùng sloóng bẩu, núng ại au pây ràn cúc quà them giợ tạo nét đây cại hùn Nòng An.", vi: "Vậy chị gói giúp em hai chiếc, em muốn mang về làm quà và giữ lại một chút nét đẹp của người Nùng An." }
    ],
    tf: [
      { q: "Bâu can Mai líu hen là căn truyền thống cại hùn Nòng An.", ans: true, exp: "Chiếc khăn Mai thấy là khăn truyền thống Nùng An." },
      { q: "Pấu hai nàu bâư căn đáy cúc bặng mầu them mầy giạ pạc xin xìn.", ans: true, exp: "Khăn được làm thủ công và giá 100 nghìn đồng 1 chiếc." },
      { q: "Mai sâu sloóng bâu căn giạ sloóng pạc xin xìn.", ans: false, exp: "Người bán bớt còn một trăm tám mươi nghìn cho hai chiếc." }
    ],
    quizzes: [
      { q: "Mai ại món đồ lậu dậu chợ?", opts: ["A. En táy lé", "B. Bâu cân", "C. Sùng pú", "D. Tọi hài"], correct: 1 },
      { q: "Bâu căn đáy cúc hẹn lậu?", opts: ["A. Cúc bặng máy", "B. An kẹn đui ma", "C. Cúc bặng mầu", "D. Cúc từ nhựa"], correct: 2 },
      { q: "Một chiếc khăn ban đầu có giá bao nhiêu?", opts: ["A. Pẹt sịp xin mòn", "B. Pạc xin mòn (100 nghìn)", "C. Pạc pẹt sịp xin", "D. Slóng pạc xin"], correct: 1 },
      { q: "Mai muốn mua bao nhiêu chiếc khăn?", opts: ["A. Bâu Toọc", "B. Sloóng bâu (2 chiếc)", "C. Slám bâu", "D. Slậy bâu"], correct: 1 },
      { q: "Pần mựng mai ại sấu căn?", opts: ["A. Hai tạo hẩu pấu đui", "B. Chụng dụng pây toọc slầu", "C. Chụng pây ràn cúc quà", "D. Chụng tặng háư pẩu hai"], correct: 2 }
    ],
    matchWords: [
      { nung: "Căn truyền thống", vi: "Một loại khăn mang nét đặc trưng trong trang phục và văn hóa Nùng An." },
      { nung: "Cúc bặng mầu", vi: "Cách làm sản phẩm bằng đôi tay và các phương pháp truyền thống." },
      { nung: "Pợt giụ", vi: "Giảm một phần số tiền phải trả khi mua một món đồ." },
      { nung: "Họ", vi: "Dùng giấy hoặc vật liệu phù hợp để bao bọc một món đồ." },
      { nung: "Cúc quà", vi: "Mua hoặc chuẩn bị một món đồ để tặng cho người khác." }
    ],
    scrambles: [
      { vi: "Khăn này có phải khăn truyền thống của người Nùng An không?", words: ["Bâu căn nấy", "sấu căn truyền thống", "cại hùn Nòng An", "bấu"], ans: "Bâu căn nấy sấu căn truyền thống cại hùn Nòng An bấu" },
      { vi: "Chị ơi, chiếc khăn này giá bao nhiêu?", words: ["Ché ời", "bâu căn nây", "gia táu lậu"], ans: "Ché ời bâu căn nây gia táu lậu" },
      { vi: "Em muốn mua hai chiếc khăn làm quà.", words: ["Mừng ại", "sấu sloóng bâu căn", "cúc quà"], ans: "Mừng ại sấu sloóng bâu căn cúc quà" }
    ],
    rewrites: [
      { vi: "Chiếc khăn này đẹp quá!", ans: "Bâư căn đây quạ!", hint: "Bâư căn" },
      { vi: "Đây có phải khăn truyền thống của người Nùng An không?", ans: "Nấy sậu căn truyền thống cại hùn Nòng An bấu?", hint: "sậu căn" },
      { vi: "Khăn được làm thủ công.", ans: "Căn cúc bặng mầu.", hint: "cúc bặng" },
      { vi: "Chiếc khăn này giá bao nhiêu?", ans: "Bâu căn nầy gia cấy lai?", hint: "gia cấy lai" },
      { vi: "Em muốn mua hai chiếc khăn.", ans: "Núng ại slấu sloóng bâư căn.", hint: "sloóng bâư" },
      { vi: "Chị có thể bớt một chút được không?", ans: "Ché bọt hấư núng tí lé đáy bầu?", hint: "bọt hấư" },
      { vi: "Hai chiếc khăn giá một trăm tám mươi nghìn đồng.", ans: "Sloóng bấư căn giạ pạc nứng pẹt sịp xin.", hint: "pẹt sịp xin" },
      { vi: "Chị gói giúp em hai chiếc nhé!", ans: "Ché họ sợi núng sloong bâư nó!", hint: "họ sợi" },
      { vi: "Em muốn mang chiếc khăn này về làm quà.", ans: "Núng ại au căn nấy pây ràn cúc quà.", hint: "cúc quà" },
      { vi: "Chiếc khăn này có nét đẹp truyền thống.", ans: "Bâu căn nấy mầy cạo đây truyền thống.", hint: "cạo đây" },
      { vi: "Em rất thích chiếc khăn này.", ans: "Núng rất ại bâu căn nấy.", hint: "rất ại" },
      { vi: "Chị cho em xem kỹ hơn được không?", ans: "Ché hấu núng líu kỵ đáy bấu?", hint: "líu kỵ" },
      { vi: "Em muốn mua thêm một chiếc nữa.", ans: "Núng ại sâự bâu lé them.", hint: "lé them" },
      { vi: "Những chiếc khăn này được làm rất đẹp.", ans: "Cao căn nấy đáy cúc rất đây.", hint: "đáy cúc" },
      { vi: "Em muốn giữ lại một chút nét đẹp của người Nùng An.", ans: "Núng ại giợ tạo căn đây cai hùn Nòng an tí le.", hint: "giợ tạo" }
    ]
  },
  {
    id: 8,
    title: "Nhà cửa – sinh hoạt",
    titleNung: "Ràn giáo – sinh hoạt",
    desc: "Không gian kiến trúc nhà sàn, gian bếp lửa và nét sinh hoạt sum vầy đầm ấm.",
    vocab: [
      { word: "Ràn cạc", vi: "Nhà sàn", eg: "Ràn cạc hùn Nòng" },
      { word: "Lay", vi: "Cầu thang", eg: "Hấn lay (Lên cầu thang)" },
      { word: "Họng bếp", vi: "Gian bếp", eg: "Họng bếp ràn cú" },
      { word: "Pẹc phầy", vi: "Bếp lửa", eg: "Nặng pẹc phầy" },
      { word: "Sinh hoạt", vi: "Sinh hoạt", eg: "Kẹn sinh hoạt" },
      { word: "Tù sày", vi: "Quây quần", eg: "Tù sày bên bếp lửa" },
      { word: "Tiếp hẹc", vi: "Tiếp khách", eg: "Kẹn tiếp hẹc" },
      { word: "Cáng có", vi: "Trò chuyện", eg: "Nặng cáng có" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Ràn mứng đây lai! Chắng hấn kin lay đạ hen hôm mùi hắn từ bếp lẹo.", vi: "Nhà cậu đẹp quá! Vừa bước lên cầu thang đã nghe mùi cơm thơm từ bếp rồi." },
      { speaker: "Lan", nung: "Ừ, nấy là bếp cại ràn cú. Sọp lắp, tằng ràn thường tù sày dậu pé phồng.", vi: "Ừ, đây là gian bếp của nhà mình. Buổi tối, cả nhà thường quây quần bên bếp lửa." },
      { speaker: "Mai", nung: "Hen lấy bọng kẹn chụng cáo mựng?", vi: "Thế còn gian bên này dùng để làm gì?" },
      { speaker: "Lan", nung: "Nấy là kèn tằng ràn sinh hoạt them tiếp hẹc. Mọi pấu dậu nấy còn rau cáng có.", vi: "Đây là nơi cả nhà sinh hoạt và tiếp khách. Mọi người thường ngồi đây uống nước, trò chuyện." },
      { speaker: "Mai", nung: "Cú ại nhất là nặng pẹc phầy, vờ tháu vờ đáy ráy có.", vi: "Mình thích nhất là ngồi bên bếp lửa, vừa ấm vừa được nghe mọi người kể chuyện." },
      { speaker: "Lan", nung: "Hẹn pây lăng ma cúc sắm, cú sẹ lận có hấu mứng rạy ma bán cú.", vi: "Vậy lần sau đến chơi, mình sẽ kể cho cậu nghe nhiều chuyện thú vị về bản mình." }
    ],
    tf: [
      { q: "Mai khen ràn cại Lan rất đây.", ans: true, exp: "Mai khen ngôi nhà sàn của Lan rất đẹp." },
      { q: "Tằng hắm, tằng ràn Lan hay nắng hềm pẹc phầy.", ans: true, exp: "Buổi tối, cả nhà thường quây quần ấm cúng bên bếp lửa." },
      { q: "Họng bợng hềm đáy dụng chấ ư cân them sắp bum cân hấu.", ans: false, exp: "Gian bên cạnh được dùng để sinh hoạt và tiếp khách, không phải bếp nấu." }
    ],
    quizzes: [
      { q: "Mai hen slui mưng lúc dạm hấn lay?", opts: ["A. Mùi ra", "B. Mùi hắu hôm (Mùi cơm thơm)", "C. Mùi on", "D. Mùi péng"], correct: 1 },
      { q: "Buổi tối, gia đình Lan thường làm gì bên bếp lửa?", opts: ["A. To ọc bài", "B. Cúc cong", "C. Quây quần (Tù sày)", "D. Pây nìn"], correct: 2 },
      { q: "Gian bên cạnh được dùng vào mục đích gì?", opts: ["A. Sinh hoạt them tiếp hẹc", "B. Chấu cân them lứng túi", "C. Nìn them chại chọc", "D. Chụng dô đò cúc nà"], correct: 0 },
      { q: "Mọi người thường làm gì ở gian sinh hoạt?", opts: ["A. Đăm máy them cún cọ", "B. Cân năm them cáng có (Uống nước & trò chuyện)", "C. Chấu háư them cúc péng", "D. Tắm thoọc them máy pú rạ"], correct: 1 },
      { q: "Mai thích nhất điều gì khi đến nhà Lan?", opts: ["A. Đáy pền hấn lay", "B. Đáy súp mừi hân", "C. Đáy nặng pec phẩy ráy lấn có", "D. Đáy nìn đâu ràn"], correct: 2 }
    ],
    matchWords: [
      { nung: "Ràn cạc", vi: "Ngôi nhà được dựng cao hơn mặt đất, mang nét đặc trưng của nhiều dân tộc miền núi." },
      { nung: "Họng bếp", vi: "Nơi trong nhà được sử dụng để nấu ăn và chuẩn bị bữa cơm." },
      { nung: "Pẹc phẩy", vi: "Nơi tạo ra hơi ấm và thường gắn với sinh hoạt gia đình." },
      { nung: "Tù sày", vi: "Cùng ngồi gần nhau, tạo nên không khí gia đình ấm áp." },
      { nung: "Tiếp hẹc", vi: "Hoạt động đón tiếp những người đến thăm nhà." }
    ],
    scrambles: [
      { vi: "Nhà của cậu đẹp quá!", words: ["Ràn cại", "mứng", "đây", "quạ"], ans: "Ràn cại mứng đây quạ" },
      { vi: "Buổi tối cả nhà thường quây quần bên bếp lửa.", words: ["Hắm lắp", "tằng cân", "thường tù sày", "dậu bềm phẩy"], ans: "Hắm lắp tằng cân thường tù sày dậu bềm phẩy" },
      { vi: "Mọi người thường ngồi đây uống nước và trò chuyện.", words: ["Mọi pẩu", "thường nặng nấy", "cân nắm", "them cáng có"], ans: "Mọi pẩu thường nặng nấy cân nắm them cáng có" }
    ],
    rewrites: [
      { vi: "Nhà cậu đẹp quá!", ans: "Ràn mứng đây quạ!", hint: "Ràn mứng" },
      { vi: "Đây là gian bếp của nhà mình.", ans: "Nấy là họng bếp ràn cú.", hint: "họng bếp" },
      { vi: "Buổi tối, cả nhà thường quây quần bên bếp lửa.", ans: "Hặm, tằng ràn nặng hềm pec phây.", hint: "nặng hềm" },
      { vi: "Gian bên này dùng để làm gì?", ans: "Họng bếp nấy chụng cúc mựng?", hint: "chụng cúc" },
      { vi: "Đây là nơi cả nhà sinh hoạt và tiếp khách.", ans: "Nấy là kẹn tằng ràn sinh hoạt them tiếp hẹc.", hint: "tiếp hẹc" },
      { vi: "Mọi người thường ngồi đây uống nước.", ans: "Mọi pấu thường nặng nấy cân nặm.", hint: "cân nặm" },
      { vi: "Mọi người thường trò chuyện ở đây.", ans: "Mọi pẩu thường cáng có dậu nấy.", hint: "cáng có" },
      { vi: "Mình thích ngồi bên bếp lửa.", ans: "Cú ại nặng căn péc phầy.", hint: "căn péc" },
      { vi: "Bếp lửa vừa ấm vừa gần gũi.", ans: "Bếp phẩy vờ thắn vờ tù cặn.", hint: "vờ thắn" },
      { vi: "Mình thích nghe mọi người kể chuyện.", ans: "Cú ại rạy mọi pấu lận có.", hint: "lận có" },
      { vi: "Nhà sàn là nơi sinh hoạt của gia đình.", ans: "Ràn cạc là kẹn sinh hoạt tăng ràn.", hint: "kẹn sinh hoạt" },
      { vi: "Gian bếp có mùi cơm rất thơm.", ans: "Dấu bếp mầy mùi háư hôm.", hint: "mùi háư hôm" },
      { vi: "Lần sau cậu đến chơi nhé!", ans: "Pày lăng mứng ma cúc sẵm nó!", hint: "cúc sẵm" },
      { vi: "Mình sẽ kể cho cậu nghe nhiều chuyện thú vị.", ans: "Cú sẹ lấn hấư mứng rạy lai có đây lai.", hint: "lai có đây" },
      { vi: "Mình rất thích không khí ấm áp trong ngôi nhà này.", ans: "Cú rất ại không khí tháu rẹm đâu en ràn nấy.", hint: "không khí" }
    ]
  },
  {
    id: 9,
    title: "Hỏi đường – chỉ đường",
    titleNung: "Cham ron – Nhìn ron",
    desc: "Cách hỏi đường, chỉ hướng đi thẳng, rẽ trái đến nhà văn hóa thôn Làng Già.",
    vocab: [
      { word: "Cham ron", vi: "Hỏi đường", eg: "Hấư cú cham ron" },
      { word: "Pây dàu", vi: "Đi thẳng", eg: "Cơ pây dàu ron nấy" },
      { word: "Pớc bọng Slúi", vi: "Rẽ trái", eg: "Tằng kìu pợc bọng slúi" },
      { word: "Kìu", vi: "Cây cầu", eg: "En kìu ý (Cầu nhỏ)" },
      { word: "Xe đạp", vi: "Xe đạp", eg: "Pây xe đạp" },
      { word: "Pây ron", vi: "Đường đi", eg: "Ron nấy pây ngại" },
      { word: "Ràn văn hóa", vi: "Nhà văn hóa", eg: "Ràn văn hóa Bán Già" },
      { word: "Sinh hoạt", vi: "Sinh hoạt", eg: "Mọi pẩu ma sinh hoạt" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Mứng ời, hấư cú cham ron pây tăng ràn văn hóa thôn Bán Già!", vi: "Cậu ơi, cho mình hỏi đường đến nhà văn hóa thôn Làng Già với!" },
      { speaker: "Lan", nung: "Mứng cơ pây dàu ron nấy, tằng en kiù ý pợc bông slúi nở.", vi: "Cậu cứ đi thẳng con đường này, đến cây cầu nhỏ thì rẽ trái nhé." },
      { speaker: "Mai", nung: "Dậu nấy tăng kẹn chay bâư? Cú pây xe đạp đáy bâu?", vi: "Từ đây đến đó có xa không? Mình đi xe đạp có được không?" },
      { speaker: "Lan", nung: "Đáy dế, chị tặm sịp phút so. Ron náy pây săm ngại.", vi: "Được chứ, chỉ khoảng mười phút thôi. Đường này cũng khá dễ đi." },
      { speaker: "Mai", nung: "À, cú líu hen hóa! Pài sái mọi pẩu ma kẹn sinh hoạt sậu bâu?", vi: "A, mình thấy rồi! Chiều nay mọi người cũng đến đó sinh hoạt phải không?" },
      { speaker: "Lan", nung: "Ừ, ngòn nấy mầy buổi sinh hoạt cại bán, mứng pây vại mọi pấu đang tằng.", vi: "Ừ, hôm nay có buổi sinh hoạt của bản đấy. Cậu đi nhanh lên, mọi người đang chờ!" }
    ],
    tf: [
      { q: "Mai cham Lan ron pây tăng ràn văn hóa thôn Bán Già.", ans: true, exp: "Mai hỏi đường đến nhà văn hóa thôn Làng Già." },
      { q: "Lan nhìn hấư Mai pợc bợng quà tằng kìu ý.", ans: false, exp: "Lan hướng dẫn rẽ trái (pợc bọng slúi), không phải rẽ phải." },
      { q: "Mai sắm pây xe đạp tằng ràn văn hóa khoạng sịp phút.", ans: true, exp: "Đi xe đạp mất khoảng mười phút là tới nơi." }
    ],
    quizzes: [
      { q: "Mai ại pây tăng lậu?", opts: ["A. Ràn tường", "B. Ràn văn hóa thôn Bán Già", "C. Chợ Phin", "D. Ràn Lan"], correct: 1 },
      { q: "Mai cúc mựng lúc pày tằng kìu ý?", opts: ["A. Pợp bợng quà", "B. Pây dàu", "C. Pợp bợng slúi (Rẽ trái)", "D. Pặn tạo"], correct: 2 },
      { q: "Mai dự định di chuyển bằng phương tiện gì?", opts: ["A. Xe máy", "B. Ô tô", "C. Xe đạp", "D. Pây kha (Đi bộ)"], correct: 2 },
      { q: "Từ chỗ đứng đến nhà văn hóa mất bao lâu?", opts: ["A. Há phút (5 phút)", "B. Sịp phút (10 phút)", "C. Nhấy sịp phút", "D. Slám sịp phút"], correct: 1 },
      { q: "Chiều hôm đó mọi người đến nhà văn hóa làm gì?", opts: ["A. Hai sấu", "B. Cân", "C. Sinh hoạt", "D. Tọọc slâu"], correct: 2 }
    ],
    matchWords: [
      { nung: "Cham ron", vi: "Hỏi người khác để biết cách đi đến một địa điểm." },
      { nung: "Pây dàu", vi: "Di chuyển theo hướng phía trước, không đổi hướng." },
      { nung: "Pợp bọng slúi", vi: "Đổi hướng sang phía bên trái khi đang di chuyển." },
      { nung: "Ràn văn hóa", vi: "Nơi cộng đồng tổ chức các hoạt động văn hóa và sinh hoạt chung." },
      { nung: "Sinh hoạt", vi: "Hoạt động tập thể được tổ chức cho mọi người trong bản." }
    ],
    scrambles: [
      { vi: "Cho mình hỏi đường đến nhà văn hóa với!", words: ["Hấu cú", "cham ron", "tằng", "ràn văn hóa", "sày"], ans: "Hấu cú cham ron tằng ràn văn hóa sày" },
      { vi: "Cậu cứ đi thẳng con đường này nhé.", words: ["Mứng cợ", "pây dàu", "kha ron nấy", "nó"], ans: "Mứng cợ pây dàu kha ron nấy nó" },
      { vi: "Đến cây cầu nhỏ thì rẽ trái nhé.", words: ["Tằng en kìu ý", "chí", "pợc bọng slúi", "nó"], ans: "Tằng en kìu ý chí pợc bọng slúi nó" }
    ],
    rewrites: [
      { vi: "Cậu ơi, cho mình hỏi đường với!", ans: "Mứng ời, hấư cú cham ron!", hint: "cham ron" },
      { vi: "Nhà văn hóa thôn Làng Già ở đâu?", ans: "Ràn văn hóa Bán Già dậu lậu?", hint: "dậu lậu" },
      { vi: "Cậu cứ đi thẳng con đường này nhé.", ans: "Mứng cậu pây giàu ron nấy nó.", hint: "pây giàu" },
      { vi: "Đến cây cầu nhỏ thì rẽ trái.", ans: "Tằng tìu kìu ý chí pợc bọng slúi.", hint: "pợc bọng" },
      { vi: "Từ đây đến đó có xa không?", ans: "Từ nấy pây tằng ken té chay bâu?", hint: "chay bâu" },
      { vi: "Mình đi xe đạp có được không?", ans: "Cú pây xe đạp đáy bâu?", hint: "xe đạp" },
      { vi: "Đường này khá dễ đi.", ans: "Ron nấy pây ngại rọ.", hint: "ngại rọ" },
      { vi: "Chỉ khoảng mười phút thôi.", ans: "Chỉ khoạng sịp phút rọ.", hint: "sịp phút" },
      { vi: "Mình thấy nhà văn hóa rồi.", ans: "Cú hen ràn văn hóa leo.", hint: "hen ràn" },
      { vi: "Chiều nay mọi người đến đó sinh hoạt phải không?", ans: "Ngòn nấy mọi pấu pây tằng kẹn sinh hoạt sâu bâu?", hint: "kẹn sinh hoạt" },
      { vi: "Hôm nay có buổi sinh hoạt của bản.", ans: "Ngòn nấy mầy buổi sinh hoạt cại hóa.", hint: "cại hóa" },
      { vi: "Mọi người đang chờ ở nhà văn hóa.", ans: "Mọi pấu đang tăng dậu ràn văn hóa.", hint: "đang tăng" },
      { vi: "Cậu đi nhanh lên nhé!", ans: "Mứng pây vại hấn nó!", hint: "vại hấn" },
      { vi: "Nhà văn hóa ở gần cây cầu nhỏ.", ans: "Ràn văn hóa dậu cặn en kìu ý.", hint: "cặn en kìu" },
      { vi: "Mình sẽ đi xe đạp đến đó.", ans: "Cú sẹ pây xe đạp tằng kẹn.", hint: "sẹ pây" }
    ]
  },
  {
    id: 10,
    title: "Trường học – thầy cô – bạn bè",
    titleNung: "Ràn tường – Thầy Cô – Bạn bè",
    desc: "Ý thức giữ gìn, trân trọng và truyền lại bản sắc văn hóa Nùng An cho mai sau.",
    vocab: [
      { word: "Văn hóa", vi: "Văn hóa", eg: "Văn hóa quê hương" },
      { word: "Quê hương", vi: "Quê hương", eg: "Tom tợc quê hương" },
      { word: "Pú rạ", vi: "Trang phục", eg: "Pú rạ truyền thống" },
      { word: "Cậu cáng", vi: "Tiếng nói", eg: "Cậu cáng hùn Nòng" },
      { word: "Ràn cạc", vi: "Nhà sàn", eg: "Ràn cạc truyền thống" },
      { word: "Làn điệu dân gian", vi: "Làn điệu dân gian", eg: "Điệu sli, điệu then" },
      { word: "Phong tục", vi: "Phong tục", eg: "Phong tục đâu bán" },
      { word: "Giợ", vi: "Gìn giữ", eg: "Giợ văn hóa" }
    ],
    dialogue: [
      { speaker: "Mai", nung: "Ngòn nấy thầy nàu lớp rau mầy hoạt động mựng?", vi: "Hôm nay thầy nói lớp mình sẽ có hoạt động gì vậy?" },
      { speaker: "Lan", nung: "Thầy nàu tù sày tìm hiểu ma văn hóa quê hương, đặc biệt là nét đây cại đồng bào Nòng dậu xạ Lục Yên.", vi: "Thầy bảo chúng mình cùng tìm hiểu về văn hóa quê hương, đặc biệt là những nét đẹp truyền thống của đồng bào Nùng tại xã Lục Yên." },
      { speaker: "Mai", nung: "Đây quạ! Cú ại tìm hiểu ma pú rạ, cậu cáng them các món cân truyền thống.", vi: "Hay quá! Mình muốn tìm hiểu về trang phục, tiếng nói và những món ăn truyền thống." },
      { speaker: "Lan", nung: "Lấy cú ại ra ma ràn cạc, các làn điệu dân gian them phong tục đâu bán.", vi: "Còn mình muốn tìm hiểu về nhà sàn, các làn điệu dân gian và những phong tục trong bản." },
      { speaker: "Mai", nung: "Thầy lấy thặng rau cáo mựng them bấu?", vi: "Thầy còn dặn chúng mình điều gì nữa không?" },
      { speaker: "Lan", nung: "Thầy nàu văn hóa chị đáy giợ khi rạu ro trân trọng them slôn tạo hấư pại lăng.", vi: "Thầy bảo văn hóa chỉ được gìn giữ khi chúng mình biết trân trọng và tiếp tục truyền lại cho thế hệ sau." },
      { speaker: "Mai", nung: "Hẹn rau tù sày cúc bài lận có ma văn hóa bón rau nó!", vi: "Vậy chúng mình cùng làm một bài giới thiệu về văn hóa quê mình nhé!" }
    ],
    tf: [
      { q: "Lớp cại Mai them Lan sẹ ra ma văn hóa quê hương.", ans: true, exp: "Lớp tìm hiểu văn hóa quê hương Lục Yên." },
      { q: "Mai ại ra ma ràn cạc them các làn điệu dân gian.", ans: false, exp: "Mai muốn tìm hiểu về trang phục, tiếng nói và món ăn; Lan mới tìm hiểu nhà sàn." },
      { q: "Thầy nàu các bạn trân trọng them truyền tạo văn hóa hấư pại lăng.", ans: true, exp: "Thầy dặn cần trân trọng và trao truyền văn hóa cho thế hệ mai sau." }
    ],
    quizzes: [
      { q: "Lớp cại Mai them Lan sẹ ra ró ma cáo mựng?", opts: ["A. Thiên nhiên tom tóc", "B. Văn hóa tom tóc", "C. Lịch sử ràn tường", "D. Hoạt động thể thao"], correct: 1 },
      { q: "Mai ại ra ró những nội dung mựng?", opts: ["A. Pú rạ, cậu cáng them món cân truyền thống", "B. Ràn cạc, làn điệu dân gian them phong tục", "C. Thể thao, âm nhạc và hội họa", "D. Sẹc, máy tính, công nghệ"], correct: 0 },
      { q: "Lan ại ra ró ma nhựng nội dung lậu?", opts: ["A. Pú rạ them món cân", "B. Ràn cạc, làn điệu dân gian them phong tục", "C. Ràn tường them bạn bè", "D. Chợ them hoạt động hai sấu"], correct: 1 },
      { q: "Rừng cậu thày, văn hóa đóng thìn giợ lúc lậu?", opts: ["A. Lúc mọi pấu ro trân trọng them truyền tạo", "B. Lúc mọi pấu chi ra ró ma văn hóa", "C. Cúc văn hóa đóng an hấn mạng", "D. Lúc mọi pấu tổ chức lai hoạt động"], correct: 0 },
      { q: "Mai them Lan ại tù sày cúc mựng?", opts: ["A. Shí bài văn hóa ràn tường", "B. Cúc bài lấn cá lé ma văn hóa quê rạu", "C. Tổ chức buổi tham quan lé", "D. Cúc bài lận có ma món cân"], correct: 1 }
    ],
    matchWords: [
      { nung: "Văn hóa", vi: "Những giá trị, lối sống và nét đẹp được hình thành trong cộng đồng." },
      { nung: "Đò tên", vi: "Những cách ăn mặc đặc trưng của một cộng đồng hoặc dân tộc." },
      { nung: "Câu cáng", vi: "Ngôn ngữ được sử dụng trong giao tiếp hằng ngày của một cộng đồng." },
      { nung: "Phong tục", vi: "Những thói quen và tập quán được lưu truyền trong đời sống cộng đồng." },
      { nung: "Gìn giợ", vi: "Bảo vệ và duy trì những giá trị tốt đẹp qua nhiều thế hệ." }
    ],
    scrambles: [
      { vi: "Chúng mình cùng tìm hiểu văn hóa quê hương nhé.", words: ["Rau sày", "ra ró", "văn hóa quê hương", "nó"], ans: "Rau sày ra ró văn hóa quê hương nó" },
      { vi: "Mai muốn tìm hiểu về trang phục truyền thống.", words: ["Mai ại", "ra ró", "ma pú rạ", "truyền thống"], ans: "Mai ại ra ró ma pú rạ truyền thống" },
      { vi: "Văn hóa cần chúng ta biết trân trọng và gìn giữ.", words: ["Văn hóa", "cần rau rọ", "trân trọng", "them gìn giự"], ans: "Văn hóa cần rau rọ trân trọng them gìn giự" }
    ],
    rewrites: [
      { vi: "Hôm nay lớp mình có hoạt động gì vậy.", ans: "Ngòn nấy lớp rau mầy cáo mựng hẹn.", hint: "lớp rau" },
      { vi: "Chúng mình cùng tìm hiểu về văn hóa quê hương nhé!", ans: "Rau tù sảy ra ró ma văn hóa quê hương nó!", hint: "ra ró" },
      { vi: "Mình muốn tìm hiểu về trang phục truyền thống.", ans: "Cú ại ra ró ma pú rạ truyền thống.", hint: "pú rạ" },
      { vi: "Mình muốn tìm hiểu về tiếng nói của người Nùng.", ans: "Cú ại ra ró ma cậu cáng cai hùn Nòng.", hint: "cậu cáng" },
      { vi: "Những món ăn truyền thống rất thú vị.", ans: "Nhựng món cân truyền thống đây lai.", hint: "đây lai" },
      { vi: "Mình muốn tìm hiểu về nhà sàn.", ans: "Cú ại ra ró mà ràn cạc.", hint: "ràn cạc" },
      { vi: "Mình thích các làn điệu dân gian.", ans: "Cú ại các làn điệu dân gian.", hint: "làn điệu" },
      { vi: "Trong bản có nhiều phong tục truyền thống.", ans: "Đâu bán mầy lai phong tục truyền thống.", hint: "đâu bán" },
      { vi: "Thầy muốn chúng mình tìm hiểu về văn hóa quê hương.", ans: "Thầy ại rau ra ró ma văn hóa quê hương.", hint: "Thầy ại" },
      { vi: "Văn hóa quê hương rất đáng trân trọng.", ans: "Văn hóa quê hương rất đáy trân trọng.", hint: "đáy trân trọng" },
      { vi: "Chúng mình cần biết gìn giữ văn hóa.", ans: "Rau thúc ro gìn giợ văn hóa.", hint: "gìn giợ" },
      { vi: "Văn hóa cần được truyền lại cho thế hệ sau.", ans: "Văn hóa cần đáy slôn tạo hấu pái lăng.", hint: "slôn tạo" },
      { vi: "Chúng mình cùng làm một bài giới thiệu nhé!", ans: "Rau tù sày cúc bài giới thiệu nứng nó!", hint: "cúc bài" },
      { vi: "Mình muốn giới thiệu văn hóa quê mình.", ans: "Rau ại giới thiệu văn hóa cại quê hương rạu.", hint: "quê hương rạu" },
      { vi: "Chúng mình hãy cùng nhau gìn giữ những nét đẹp truyền thống.", ans: "Rau tù sày gìn giợ nhựng nét đây truyền thống.", hint: "nét đây" }
    ]
  }
];

let currentLessonId = 1;
let selectedColA = null;
let matchedPairs = 0;
let allFlashcards = [];
let currentCardIndex = 0;

window.addEventListener('DOMContentLoaded', () => {
  initHomeLessonGrid();
  initSidebar();
  loadLesson(1);
  initFlashcards();
  initDictionary();
  initScrollEffects();

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openDictModal();
    }
    if (e.key === 'Escape') {
      closeDictModal();
    }
  });
});

function initScrollEffects() {
  const progressBar = document.getElementById('scroll-progress');
  const backBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    if (progressBar) progressBar.style.width = progress + '%';
    if (scrollTop > 350) {
      backBtn.classList.add('show');
    } else {
      backBtn.classList.remove('show');
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function adjustStoryFont(storyId, change) {
  const storyEl = document.getElementById(storyId);
  if (!storyEl) return;
  const currentSize = parseFloat(window.getComputedStyle(storyEl, null).getPropertyValue('font-size'));
  const newSize = currentSize + (change * 1.5);
  if (newSize >= 15 && newSize <= 25) {
    storyEl.style.fontSize = newSize + 'px';
  }
}

function switchView(viewName) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  const navMap = {
    'home': 0,
    'lessons': 1,
    'flashcards': 2,
    'library': 3,
    'videos': 4,
    'stories': 5,
    'culture': 6
  };
  const navItems = document.querySelectorAll('.nav-item');
  if (navItems[navMap[viewName]]) {
    navItems[navMap[viewName]].classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchBookTab(bookKey, bookUrl, btnEl) {
  document.querySelectorAll('.book-tab-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
  const iframe = document.getElementById('library-iframe');
  if (iframe) iframe.src = bookUrl;
  showToast(`Đang mở: ${btnEl.innerText}`);
}

function switchVideo(num, fileName, title, desc) {
  const player = document.getElementById('player-screen');
  const source = document.getElementById('video-source');
  
  source.src = fileName;
  player.load();
  player.play().catch(() => {});

  document.getElementById('now-playing-title').innerText = title;
  document.getElementById('now-playing-desc').innerText = desc;

  document.querySelectorAll('.video-item-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`btn-v${num}`).classList.add('active');

  showToast(`Đang chiếu: ${title}`);
}

function initHomeLessonGrid() {
  const container = document.getElementById('home-lesson-grid');
  container.innerHTML = LESSONS_DATA.map(l => `
    <div class="lesson-card" onclick="selectLessonAndOpen(${l.id})">
      <div>
        <span class="lesson-num">Bài ${l.id}</span>
        <h4>${l.title}</h4>
        <p>${l.desc}</p>
      </div>
      <div class="lesson-card-footer">
        <span><i class="fa-solid fa-layer-group"></i> 7 mục chuẩn</span>
        <span style="color: var(--secondary); font-weight: 800;"><i class="fa-solid fa-arrow-right"></i> Vào học</span>
      </div>
    </div>
  `).join('');
}

function initSidebar() {
  const container = document.getElementById('lesson-sidebar-items');
  container.innerHTML = LESSONS_DATA.map(l => `
    <div class="lesson-list-item ${l.id === 1 ? 'active' : ''}" id="sidebar-item-${l.id}" onclick="loadLesson(${l.id})">
      <i class="fa-solid fa-bookmark" style="font-size: 0.8rem;"></i>
      <span>Bài ${l.id}: ${l.title}</span>
    </div>
  `).join('');
}

function selectLessonAndOpen(id) {
  switchView('lessons');
  loadLesson(id);
}

function loadLesson(id) {
  currentLessonId = id;
  const lesson = LESSONS_DATA.find(l => l.id === id) || LESSONS_DATA[0];

  document.querySelectorAll('.lesson-list-item').forEach(item => item.classList.remove('active'));
  const activeSidebarItem = document.getElementById(`sidebar-item-${id}`);
  if (activeSidebarItem) activeSidebarItem.classList.add('active');

  document.getElementById('current-lesson-badge').innerText = `Bài ${lesson.id}`;
  document.getElementById('current-lesson-title').innerText = `${lesson.title} (${lesson.titleNung})`;
  document.getElementById('current-lesson-desc').innerText = lesson.desc;

  switchLessonTab('tab-vocab');

  renderVocabSection(lesson.vocab);
  renderDialogueSection(lesson.dialogue);
  renderTFSection(lesson.tf);
  renderQuizSection(lesson.quizzes);
  renderMatchSection(lesson.matchWords);
  renderScrambleSection(lesson.scrambles);
  renderRewriteSection(lesson.rewrites);
}

function switchLessonTab(tabId) {
  document.querySelectorAll('.tab-pane').forEach(tp => tp.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(tb => tb.classList.remove('active'));

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');

  const clickedBtn = Array.from(document.querySelectorAll('.tab-btn')).find(b => b.getAttribute('onclick').includes(tabId));
  if (clickedBtn) clickedBtn.classList.add('active');
}

function renderVocabSection(vocabList) {
  const container = document.getElementById('vocab-grid-container');
  container.innerHTML = vocabList.map(v => `
    <div class="vocab-card">
      <div class="vocab-word">${v.word}</div>
      <div class="vocab-meaning">Nghĩa: ${v.vi}</div>
      <div class="vocab-example">Ví dụ: ${v.eg}</div>
    </div>
  `).join('');
}

function renderDialogueSection(dialogueList) {
  const container = document.getElementById('dialogue-container');
  container.innerHTML = dialogueList.map(d => `
    <div class="dialogue-bubble">
      <div class="speaker-avatar">${d.speaker.charAt(0)}</div>
      <div class="bubble-body">
        <div class="speaker-name">${d.speaker}</div>
        <div class="bubble-nung">${d.nung}</div>
        <div class="bubble-vi vi-text">${d.vi}</div>
      </div>
    </div>
  `).join('');
}

function toggleTranslation(show) {
  document.querySelectorAll('.vi-text').forEach(el => {
    el.style.display = show ? 'block' : 'none';
  });
}

function renderTFSection(tfList) {
  const container = document.getElementById('tf-container');
  container.innerHTML = tfList.map((item, idx) => `
    <div class="quiz-card" id="tf-card-${idx}">
      <div class="quiz-question">${idx + 1}. ${item.q}</div>
      <div style="display: flex; gap: 12px;">
        <button class="btn btn-light opt-tf-btn" style="border: 1.5px solid var(--border); color: var(--text-title);" onclick="checkTF(${idx}, true, ${item.ans})">
          <i class="fa-solid fa-check"></i> Đúng (Đ)
        </button>
        <button class="btn btn-light opt-tf-btn" style="border: 1.5px solid var(--border); color: var(--text-title);" onclick="checkTF(${idx}, false, ${item.ans})">
          <i class="fa-solid fa-xmark"></i> Sai (S)
        </button>
      </div>
      <div class="quiz-explanation" id="tf-exp-${idx}">
        <strong>Giải thích:</strong> ${item.exp}
      </div>
    </div>
  `).join('');
}

function checkTF(qIdx, userVal, correctVal) {
  const card = document.getElementById(`tf-card-${qIdx}`);
  const exp = document.getElementById(`tf-exp-${qIdx}`);
  const buttons = card.querySelectorAll('.opt-tf-btn');

  buttons.forEach(b => b.disabled = true);
  if (userVal === correctVal) {
    showToast("Chính xác! Bạn đã ghi điểm.");
    card.style.border = "2px solid var(--success)";
    triggerConfetti();
  } else {
    showToast("Chưa đúng rồi! Hãy xem giải thích.");
    card.style.border = "2px solid var(--error)";
  }
  exp.style.display = "block";
}

function renderQuizSection(quizList) {
  const container = document.getElementById('quiz-container');
  container.innerHTML = quizList.map((q, qIdx) => `
    <div class="quiz-card" id="mc-card-${qIdx}">
      <div class="quiz-question">Câu ${qIdx + 1}: ${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, optIdx) => `
          <div class="opt-btn" onclick="checkQuizOpt(${qIdx}, ${optIdx}, ${q.correct}, this)">
            <span>${opt}</span>
            <i class="fa-regular fa-circle"></i>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function checkQuizOpt(qIdx, optIdx, correctIdx, btnEl) {
  const card = document.getElementById(`mc-card-${qIdx}`);
  const allOpts = card.querySelectorAll('.opt-btn');

  allOpts.forEach(o => o.style.pointerEvents = 'none');

  if (optIdx === correctIdx) {
    btnEl.classList.add('correct');
    btnEl.querySelector('i').className = 'fa-solid fa-circle-check';
    showToast("Câu trả lời hoàn toàn chính xác!");
    triggerConfetti();
  } else {
    btnEl.classList.add('wrong');
    btnEl.querySelector('i').className = 'fa-solid fa-circle-xmark';
    allOpts[correctIdx].classList.add('correct');
    allOpts[correctIdx].querySelector('i').className = 'fa-solid fa-circle-check';
    showToast("Đáp án viền xanh là đáp án đúng.");
  }
}

function renderMatchSection(pairList) {
  selectedColA = null;
  matchedPairs = 0;
  const colA = document.getElementById('match-col-a');
  const colB = document.getElementById('match-col-b');

  colA.innerHTML = '';
  colB.innerHTML = '';

  const shuffledB = [...pairList].sort(() => Math.random() - 0.5);

  pairList.forEach(p => {
    const itemA = document.createElement('div');
    itemA.className = 'match-card';
    itemA.innerText = p.nung;
    itemA.dataset.key = p.nung;
    itemA.onclick = () => selectColA(itemA);
    colA.appendChild(itemA);
  });

  shuffledB.forEach(p => {
    const itemB = document.createElement('div');
    itemB.className = 'match-card';
    itemB.innerText = p.vi;
    itemB.dataset.matchKey = p.nung;
    itemB.onclick = () => selectColB(itemB);
    colB.appendChild(itemB);
  });
}

function selectColA(el) {
  if (el.classList.contains('matched')) return;
  document.querySelectorAll('#match-col-a .match-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedColA = el;
}

function selectColB(el) {
  if (!selectedColA || el.classList.contains('matched')) return;
  if (el.dataset.matchKey === selectedColA.dataset.key) {
    el.classList.add('matched');
    selectedColA.classList.remove('selected');
    selectedColA.classList.add('matched');
    selectedColA = null;
    matchedPairs++;
    showToast("Ghép nối chính xác!");
    if (matchedPairs === 5) {
      triggerConfetti();
      showToast("Xuất sắc! Bạn đã nối đúng toàn bộ.");
    }
  } else {
    showToast("Chưa đúng cặp từ, thử lại nhé!");
    selectedColA.classList.remove('selected');
    selectedColA = null;
  }
}

function renderScrambleSection(scrambles) {
  const container = document.getElementById('scramble-container');
  container.innerHTML = scrambles.map((sc, sIdx) => {
    const shuffledWords = [...sc.words].sort(() => Math.random() - 0.5);
    return `
      <div class="scramble-box" id="scramble-box-${sIdx}">
        <div class="target-meaning"><strong>Câu cần ghép:</strong> "${sc.vi}"</div>
        <div class="answer-dropzone" id="dropzone-${sIdx}"></div>
        <div class="word-pool" id="pool-${sIdx}">
          ${shuffledWords.map(w => `
            <span class="word-chip" onclick="moveChip(this, ${sIdx})">${w}</span>
          `).join('')}
        </div>
        <div style="margin-top: 12px; display: flex; gap: 8px;">
          <button class="btn btn-light" style="font-size: 0.85rem; border: 1.5px solid var(--border); color: var(--text-title);" onclick="checkScramble(${sIdx}, '${sc.ans}')">
            <i class="fa-solid fa-check"></i> Kiểm tra
          </button>
          <button class="btn btn-light" style="font-size: 0.85rem; border: 1.5px solid var(--border); color: var(--text-title);" onclick="resetScramble(${sIdx})">
            <i class="fa-solid fa-rotate-left"></i> Làm lại
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function moveChip(chip, sIdx) {
  const dropzone = document.getElementById(`dropzone-${sIdx}`);
  const pool = document.getElementById(`pool-${sIdx}`);

  if (chip.parentElement.id === `dropzone-${sIdx}`) {
    pool.appendChild(chip);
  } else {
    dropzone.appendChild(chip);
  }
}

function checkScramble(sIdx, expectedAns) {
  const dropzone = document.getElementById(`dropzone-${sIdx}`);
  const chips = Array.from(dropzone.querySelectorAll('.word-chip'));
  const userAns = chips.map(c => c.innerText.trim()).join(' ');

  if (userAns.toLowerCase() === expectedAns.toLowerCase()) {
    showToast("Tuyệt vời! Bạn ghép đúng câu.");
    dropzone.style.borderColor = "var(--success)";
    triggerConfetti();
  } else {
    showToast("Thứ tự chưa đúng, hãy thử lại.");
    dropzone.style.borderColor = "var(--error)";
  }
}

function resetScramble(sIdx) {
  const dropzone = document.getElementById(`dropzone-${sIdx}`);
  const pool = document.getElementById(`pool-${sIdx}`);
  const chips = Array.from(dropzone.querySelectorAll('.word-chip'));
  chips.forEach(c => pool.appendChild(c));
  dropzone.style.borderColor = "#94a3b8";
}

function renderRewriteSection(rewrites) {
  const container = document.getElementById('write-container');
  container.innerHTML = rewrites.map((rw, rIdx) => `
    <div class="write-task">
      <div style="font-size: 0.95rem; font-weight: 800;">Câu ${rIdx + 1}: ${rw.vi}</div>
      <div class="write-input-group">
        <input type="text" class="write-input" id="write-input-${rIdx}" placeholder="Nhập câu tiếng Nùng An...">
        <button class="btn btn-light" style="border: 1.5px solid var(--border); color: var(--text-title);" onclick="toggleHint(${rIdx})">
          <i class="fa-regular fa-lightbulb"></i> Gợi ý
        </button>
        <button class="btn btn-primary" onclick="checkRewrite(${rIdx}, '${rw.ans}')">
          Kiểm tra
        </button>
      </div>
      <div class="hint-text" id="hint-${rIdx}"><strong>Gợi ý:</strong> ${rw.hint} | <strong>Đáp án chuẩn:</strong> ${rw.ans}</div>
    </div>
  `).join('');
}

function toggleHint(rIdx) {
  const hint = document.getElementById(`hint-${rIdx}`);
  hint.style.display = hint.style.display === 'block' ? 'none' : 'block';
}

function checkRewrite(rIdx, correctAns) {
  const input = document.getElementById(`write-input-${rIdx}`);
  const val = input.value.trim().toLowerCase();
  const target = correctAns.trim().toLowerCase();

  if (val === target) {
    showToast("Chính xác tuyệt đối!");
    input.style.borderColor = "var(--success)";
    triggerConfetti();
  } else {
    showToast("Chưa đúng, hãy bấm nút Gợi ý nhé!");
    input.style.borderColor = "var(--error)";
  }
}

function initFlashcards() {
  allFlashcards = [];
  LESSONS_DATA.forEach(l => {
    l.vocab.forEach(v => {
      allFlashcards.push({
        lessonId: l.id,
        word: v.word,
        vi: v.vi,
        eg: v.eg
      });
    });
  });
  currentCardIndex = 0;
  updateFlashcardView();
}

function updateFlashcardView() {
  if (allFlashcards.length === 0) return;
  const card = allFlashcards[currentCardIndex];
  const cardBox = document.getElementById('flashcard-box');
  cardBox.classList.remove('flipped');

  document.getElementById('fc-badge').innerText = `Bài ${card.lessonId}`;
  document.getElementById('fc-word').innerText = card.word;
  document.getElementById('fc-meaning').innerText = card.vi;
  document.getElementById('fc-example').innerText = `Ví dụ: ${card.eg}`;
  document.getElementById('fc-counter').innerText = `${currentCardIndex + 1} / ${allFlashcards.length}`;
}

function flipCard() {
  document.getElementById('flashcard-box').classList.toggle('flipped');
}

function nextCard() {
  if (currentCardIndex < allFlashcards.length - 1) {
    currentCardIndex++;
    updateFlashcardView();
  } else {
    showToast("Đã xem hết thẻ!");
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    currentCardIndex--;
    updateFlashcardView();
  }
}

function shuffleFlashcards() {
  allFlashcards.sort(() => Math.random() - 0.5);
  currentCardIndex = 0;
  updateFlashcardView();
  showToast("Đã xáo trộn kho thẻ!");
}

function markCardMastered() {
  showToast(`Đã thuộc từ: "${allFlashcards[currentCardIndex].word}"`);
  triggerConfetti();
  nextCard();
}

function filterFlashcards(lessonVal) {
  if (lessonVal === 'all') {
    initFlashcards();
  } else {
    const id = parseInt(lessonVal);
    allFlashcards = [];
    const lesson = LESSONS_DATA.find(l => l.id === id);
    if (lesson) {
      lesson.vocab.forEach(v => {
        allFlashcards.push({
          lessonId: lesson.id,
          word: v.word,
          vi: v.vi,
          eg: v.eg
        });
      });
    }
    currentCardIndex = 0;
    updateFlashcardView();
  }
}

let dictionaryData = [];

function initDictionary() {
  dictionaryData = [];
  LESSONS_DATA.forEach(l => {
    l.vocab.forEach(v => {
      dictionaryData.push({ nung: v.word, vi: v.vi, lesson: l.id });
    });
  });
}

function openDictModal() {
  document.getElementById('dict-modal').classList.add('open');
  const input = document.getElementById('dict-search-input');
  input.focus();
  handleDictSearch(input.value);
}

function closeDictModal(e) {
  if (!e || e.target.id === 'dict-modal' || e.target.classList.contains('kbd-shortcut')) {
    document.getElementById('dict-modal').classList.remove('open');
  }
}

function handleDictSearch(query) {
  const q = query.trim().toLowerCase();
  const resultsContainer = document.getElementById('dict-results-container');
  
  const filtered = dictionaryData.filter(item => 
    item.nung.toLowerCase().includes(q) || item.vi.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    resultsContainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted);">Không tìm thấy từ tương ứng.</div>`;
    return;
  }

  resultsContainer.innerHTML = filtered.map(item => `
    <div class="dict-result-item" onclick="selectDictItem('${item.nung}')">
      <div>
        <strong style="color: var(--primary-dark); font-size: 1.05rem;">${item.nung}</strong>
        <span style="color: var(--text-muted); font-size: 0.9rem; margin-left: 8px;">— ${item.vi}</span>
      </div>
      <span style="font-size: 0.75rem; background: var(--secondary-light); color: var(--primary); padding: 3px 10px; border-radius: 6px; font-weight: 800;">Bài ${item.lesson}</span>
    </div>
  `).join('');
}

function selectDictItem(nungWord) {
  showToast(`Đã chọn từ: ${nungWord}`);
}

function triggerConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#f59e0b', '#14b8a6', '#ef4444', '#7c3aed', '#10b981'];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      radius: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 0.5) * 12 - 3,
      alpha: 1,
      decay: Math.random() * 0.02 + 0.015
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25;
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        alive = true;
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    });

    if (alive) {
      requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  render();
}

function showToast(msg) {
  const toast = document.getElementById('toast-notify');
  document.getElementById('toast-text').innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}