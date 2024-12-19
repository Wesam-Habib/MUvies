document.addEventListener("DOMContentLoaded", function () {
    const carouselItems = document.querySelectorAll(".carousel-item img");
    const banner = document.querySelector(".banner");

    const movieLogo = document.getElementById("movie-logo");
    const movieYear = document.getElementById("movie-year");
    const movieRating = document.getElementById("movie-rating");
    const movieDuration = document.getElementById("movie-duration");
    const movieGenre = document.getElementById("movie-genre");
    const movieDescription = document.getElementById("movie-description");

    const movies = [
        {
            background: "Bait El Ruby BG.jpg",
            logo: "Bait El Ruby Logo.png",
            year: "2023",
            rating: "12+",
            duration: "1h41min",
            genre: "Comedy/Drama",
            description:
                "يتناول العمل قصة المهندس إبراهيم الروبي الذي تتعرض زوجته لأزمة ضخمة يلجأ بعدها للهروب من المدينة والابتعاد إلى مكان منعزل، ويعيش لسنوات ولكنه يعود مجددا بسبب ظروف طارئة على حياته، مما يجعله يتعرض لكثير من المواقف الصعبة التي تغير مسارات حياته ويعود شبح الأزمة القديمة لمطاردته وزوجته."       
        },
        {
            background: "El Serb BG.jpg",
            logo: "El Serb Logo.png",
            year: "2024",
            rating: "16+",
            duration: "2h5min",
            genre: "Action/Drama",
            description:
                "فيلم حربي يتناول وقائع حقيقية وعمل الجهات الأمنية المصرية ضد المنظمات والكيانات الإرهابية، ومنها واقعة ذبح 21 مصريا في ليبيا وقيام الجيش بعمليات للتصدي لتلك الجماعات الإرهابية."
        },
        {
            background: "El Harrifa BG.jpg",
            logo: "El Harrifa Logo.png",
            year: "2024",
            rating: "+16",
            duration: "1h30min",
            genre: "Sport/Comedy",
            description:
                "تُجبر الظروف (ماجد) على ترك حياة الرخاء والانتقال من مدرسته الخاصة إلى مدرسة حكومية، فيكتسب بمرور الوقت احترام زملائه بسبب مهارته الكبيرة في كرة القدم؛ فينضم إلى فريق المدرسة في مسابقة على أمل الفوز بجائزة كبرى."
        },
        {
            background: "Mn Agl Zeko BG.jpg",
            logo: "Mn Agl Zeko Logo.png",
            year: "2022",
            rating: "PG",
            duration: "1h50min",
            genre: "Comedy/Family",
            description:
                "يتناول العمل قصة عائلة بسيطة يفوز ابنهم الصغير زيكو بفرصة المشاركة في مسابقة أذكى طفل في مصر، فينطلقوا معًا في رحلة من أجل حضور المسابقة، وتقع لهم العديد من المفارقات خلال الرحلة التي تمتد لمدة يومين."
        },
        {
            background: "El Hawa Sultan BG.jpg",
            logo: "El Hawa Sultan Logo.png",
            year: "2024",
            rating: "PG",
            duration: "1h30min",
            genre: "Romance/Drama",
            description:
                "دور الأحداث حول شابة وشاب تربطهما علاقة صداقة قوية منذ الطفولة، ويواجهان معًا العديد من المواقف والمشكلات المختلفة مع أصدقاءهما وأسرتيهما، لكن تحدث فجأة بعض المتغيرات في علاقتهما، وتتوالى الأحداث."    
        }
    ];

    carouselItems.forEach((item, index) => {
        item.addEventListener("click", function () {
            const movie = movies[index];
            banner.style.backgroundImage = `url('${movie.background}')`;
            movieLogo.src = movie.logo;
            movieYear.textContent = movie.year;
            movieRating.innerHTML = `<i>${movie.rating}</i>`;
            movieDuration.textContent = movie.duration;
            movieGenre.textContent = movie.genre;
            movieDescription.textContent = movie.description;
        });
    });
});


