/* ============================
   بيانات الدروس
============================ */

const lessons = {

  1: {
    title: "مقدمة في التواصل",

    content: `
      <p>
        التواصل هو عملية تبادل الأفكار والمعلومات
        والمشاعر بين الأشخاص. ولا يعتمد التواصل
        الجيد على الكلام فقط، بل يشمل الاستماع
        ولغة الجسد وطريقة التعبير.
      </p>

      <h2>لماذا التواصل مهم؟</h2>

      <p>
        مهارات التواصل تساعدك في بناء علاقات أفضل،
        والعمل ضمن فريق، وعرض أفكارك بطريقة واضحة،
        والتعامل مع المواقف المختلفة بثقة.
      </p>

      <div class="lesson-tip">
        <strong>تطبيق عملي:</strong>
        خلال حديثك القادم مع شخص، حاول أن تركز
        بشكل كامل على ما يقوله قبل التفكير في ردك.
      </div>
    `
  },


  2: {
    title: "الاستماع الفعّال",

    content: `
      <p>
        الاستماع الفعّال يعني أن تستمع بهدف الفهم،
        وليس فقط انتظار دورك في الحديث.
      </p>

      <h2>كيف تستمع بفعالية؟</h2>

      <p>
        ركز مع المتحدث، تجنب المقاطعة،
        اطرح أسئلة توضيحية، وأعد صياغة ما فهمته
        عندما يكون الموضوع مهماً.
      </p>

      <div class="lesson-tip">
        <strong>تمرين:</strong>
        استمع إلى شخص لمدة دقيقتين دون مقاطعته،
        ثم لخص له ما فهمته من كلامه.
      </div>
    `
  },


  3: {
    title: "لغة الجسد",

    content: `
      <p>
        لا يتم التواصل بالكلمات فقط.
        تعابير الوجه ونبرة الصوت وحركة اليدين
        وطريقة الوقوف كلها ترسل رسائل للطرف الآخر.
      </p>

      <h2>التواصل البصري</h2>

      <p>
        التواصل البصري المتوازن يساعد على إظهار
        الاهتمام والثقة، لكن يجب أن يبقى طبيعياً
        وغير مبالغ فيه.
      </p>

      <div class="lesson-tip">
        راقب لغة جسدك خلال محادثة اليوم:
        هل وضعية جسدك تعطي انطباعاً بالاهتمام؟
      </div>
    `
  },


  4: {
    title: "التحدث بثقة",

    content: `
      <p>
        التحدث بثقة لا يعني رفع الصوت.
        الثقة تظهر عندما تكون فكرتك واضحة
        وتشرحها بهدوء وبطريقة منظمة.
      </p>

      <h2>رتب فكرتك</h2>

      <p>
        قبل الحديث في موضوع مهم، حدد الفكرة
        الأساسية والنقاط التي تريد إيصالها.
        تجنب إضافة تفاصيل لا تخدم رسالتك.
      </p>

      <div class="lesson-tip">
        اختر موضوعاً تعرفه جيداً وحاول شرحه
        خلال دقيقة واحدة فقط.
      </div>
    `
  },


  5: {
    title: "التعامل مع الآخرين",

    content: `
      <p>
        التواصل يصبح أكثر أهمية عندما تختلف
        الآراء. الهدف ليس الفوز في كل نقاش،
        بل الوصول إلى فهم أفضل.
      </p>

      <h2>عند حدوث اختلاف</h2>

      <p>
        استمع إلى وجهة النظر الأخرى،
        وناقش الفكرة بدلاً من مهاجمة الشخص،
        وحاول البحث عن نقاط الاتفاق أولاً.
      </p>

      <div class="lesson-tip">
        <strong>قاعدة مفيدة:</strong>
        اختلف مع الفكرة دون التقليل من صاحبها.
      </div>
    `
  }

};


/* ============================
   حفظ التقدم
============================ */

function getCompletedLessons() {

  return JSON.parse(
    localStorage.getItem("maharaCompleted")
  ) || [];

}


function saveCompletedLessons(lessons) {

  localStorage.setItem(
    "maharaCompleted",
    JSON.stringify(lessons)
  );

}


function getProgress() {

  const completed =
    getCompletedLessons();

  const total = 5;

  return Math.round(
    (completed.length / total) * 100
  );

}


/* ============================
   تحديث مؤشرات التقدم
============================ */

function updateProgressBars() {

  const progress =
    getProgress();


  const homeBar =
    document.getElementById("homeProgress");

  const homeText =
    document.getElementById("progressText");

  const courseBar =
    document.getElementById("courseProgress");

  const courseText =
    document.getElementById("coursePercent");

  const lessonBar =
    document.getElementById("lessonProgress");

  const lessonText =
    document.getElementById(
      "lessonProgressText"
    );


  if (homeBar) {
    homeBar.style.width =
      progress + "%";
  }

  if (homeText) {
    homeText.textContent =
      progress + "%";
  }


  if (courseBar) {
    courseBar.style.width =
      progress + "%";
  }

  if (courseText) {
    courseText.textContent =
      progress + "%";
  }


  if (lessonBar) {
    lessonBar.style.width =
      progress + "%";
  }

  if (lessonText) {
    lessonText.textContent =
      progress + "%";
  }

}


/* ============================
   صفحة المسار
============================ */

function updateCourseLessons() {

  const completed =
    getCompletedLessons();


  document
    .querySelectorAll("[data-lesson]")
    .forEach(item => {

      const id =
        Number(item.dataset.lesson);

      if (
        completed.includes(id)
      ) {

        item.classList.add(
          "completed"
        );

        const status =
          item.querySelector(
            ".status"
          );

        if (status) {
          status.textContent =
            "مكتمل ✓";
        }

        const number =
          item.querySelector(
            ".lesson-number"
          );

        if (number) {
          number.textContent =
            "✓";
        }

      }

    });

}


/* ============================
   صفحة الدرس
============================ */

function loadLesson() {

  const title =
    document.getElementById(
      "lessonTitle"
    );

  if (!title) return;


  const params =
    new URLSearchParams(
      window.location.search
    );

  let id =
    Number(
      params.get("id")
    );


  if (!lessons[id]) {
    id = 1;
  }


  const lesson =
    lessons[id];


  title.textContent =
    lesson.title;


  document.getElementById(
    "lessonLabel"
  ).textContent =
    "الدرس " + id + " من 5";


  document.getElementById(
    "lessonBody"
  ).innerHTML =
    lesson.content;


  const button =
    document.getElementById(
      "completeLesson"
    );


  const completed =
    getCompletedLessons();


  if (
    completed.includes(id)
  ) {

    button.textContent =
      "تم إكمال الدرس ✓";

  }


  button.addEventListener(
    "click",
    function() {

      const current =
        getCompletedLessons();


      if (
        !current.includes(id)
      ) {

        current.push(id);

        saveCompletedLessons(
          current
        );

      }


      updateProgressBars();


      if (id < 5) {

        window.location.href =
          "lesson.html?id=" +
          (id + 1);

      } else {

        window.location.href =
          "quiz.html";

      }

    }
  );

}


/* ============================
   البحث من الصفحة الرئيسية
============================ */

const searchForm =
  document.getElementById(
    "searchForm"
  );


if (searchForm) {

  searchForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();

      const value =
        document.getElementById(
          "searchInput"
        ).value.trim();


      if (!value) {

        alert(
          "اكتب اسم المهارة التي تبحث عنها."
        );

        return;

      }


      window.location.href =
        "skills.html?search=" +
        encodeURIComponent(value);

    }
  );

}


/* ============================
   البحث في صفحة المهارات
============================ */

const skillsSearch =
  document.getElementById(
    "skillsSearch"
  );


function filterSkills(value) {

  document
    .querySelectorAll(
      ".skill-card"
    )
    .forEach(card => {

      const name =
        card.dataset.name
          .toLowerCase();

      const search =
        value
          .trim()
          .toLowerCase();


      if (
        name.includes(search)
      ) {

        card.style.display =
          "block";

      } else {

        card.style.display =
          "none";

      }

    });

}


if (skillsSearch) {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const initialSearch =
    params.get("search") || "";


  skillsSearch.value =
    initialSearch;


  filterSkills(
    initialSearch
  );


  skillsSearch.addEventListener(
    "input",
    function() {

      filterSkills(
        this.value
      );

    }
  );

}


/* ============================
   الاختبار
============================ */

const quizForm =
  document.getElementById(
    "quizForm"
  );


if (quizForm) {

  quizForm.addEventListener(
    "submit",
    function(event) {

      event.preventDefault();


      let score = 0;

      const questions =
        ["q1", "q2", "q3"];


      let answered = true;


      questions.forEach(
        question => {

          const selected =
            document.querySelector(
              `input[name="${question}"]:checked`
            );


          if (!selected) {

            answered = false;

          } else {

            score +=
              Number(
                selected.value
              );

          }

        }
      );


      if (!answered) {

        alert(
          "يرجى الإجابة عن جميع الأسئلة."
        );

        return;

      }


      const percentage =
        Math.round(
          (score / 3) * 100
        );


      const result =
        document.getElementById(
          "quizResult"
        );


      result.classList.remove(
        "hidden"
      );


      let message;


      if (percentage >= 70) {

        message =
          "ممتاز! اجتزت الاختبار بنجاح 🎉";

        localStorage.setItem(
          "maharaQuizPassed",
          "true"
        );

      } else {

        message =
          "يمكنك مراجعة الدروس والمحاولة مرة أخرى.";

      }


      result.innerHTML = `
        <h2>${percentage}%</h2>

        <p>${message}</p>

        <br>

        <a
          href="course.html"
          class="button"
        >
          العودة إلى المسار
        </a>
      `;


      result.scrollIntoView({
        behavior: "smooth"
      });

    }
  );

}


/* ============================
   التشغيل
============================ */

loadLesson();

updateProgressBars();

updateCourseLessons();
