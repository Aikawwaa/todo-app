<template>
  <div class="main">
    <h1>{{ projectName }}</h1>
    <!-- Форма для добавления новой задачи -->
    <form @submit.prevent="addTask">
      <input
        type="text"
        v-model="newTask"
        placeholder="Новая задача"
        required
      />
      <button type="submit">Добавить</button>
    </form>

    <!-- Список задач -->
    <ul>
      <li v-for="(task, index) in filteredTasks" :key="index">
        <input type="checkbox" v-model="task.done" /> {{ task.text }}
        <button @click="deleteTask(index)" class="delete">Удалить</button>
      </li>
    </ul>

    <!-- Фильтр задач -->
        <input type="text" v-model="taskFilter" placeholder="Фильтр" class="filter"> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      projectName: "Мой проект",
      newTask: "",
      tasks: [],
      taskFilter: '',
    };
  },
  mounted() {
    // Загрузка данных при загрузке страницы
    const savedData = localStorage.getItem("todo-app-data");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.projectName = parsedData.projectName;
      this.tasks = parsedData.tasks;
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.tasks.push({ text: this.newTask, done: false });
        this.newTask = "";
        this.saveData();
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this.saveData();
    },
    saveData() {
      // Сохранение данных в localStorage
      const dataToSave = {
        projectName: this.projectName,
        tasks: this.tasks,
      };
      localStorage.setItem("todo-app-data", JSON.stringify(dataToSave));
    },
  },
  computed: {
                  filteredTasks() {
            // Вычисляемое свойство для фильтрации задач
            return this.tasks.filter(task => {
                return task.text.toLowerCase().includes(this.taskFilter.toLowerCase());
            });
            },
}
}
</script>

<style>
</style>