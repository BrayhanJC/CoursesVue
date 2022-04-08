new Vue({
  el: "#app",
  data() {
    return {
      title: "Cursos",
      image:
        "https://static.platzi.com/mf-landings/image/isotipoPlatzi-442ccc1186a9806e18c9889cc301ffe1.png",
      placeholderCourseName: "Nombre del Curso",
      placeholderHour: "Nº de Horas",
      nameCourse: "",
      timeCourse: 0,
      courses: [],
    };
  },
  methods: {
    addCourse() {
      console.log(this.nameCourse);
      const courses_val = {
        name: this.nameCourse,
        time: parseInt(this.timeCourse),
      };
      this.courses.push(courses_val);
      console.log(this.courses);
      this.nameCourse = "";
      this.timeCourse = 0;
    },
  },
  computed: {
    totalTime() {
      if (this.courses.length > 0) {
        const sumTotal = this.courses.reduce(
          (previous, current) => previous + current.time,
          0
        );

        return sumTotal;
      }
      return 0;
    },
  },
  watch: {
    totalTime(newValue, oldValue) {},
  },
});
