<template>
  <div :class="taskClass">
    <label class="checkbox">
      <!-- eslint-disable-next-line prettier/prettier -->
      <input type="checkbox" :checked="isChecked" :disabled="true" name="checked" />
      <span class="checkbox-custom" @click="$emit('archiveTask', task.id)" />
    </label>
    <div class="title">
      <!-- eslint-disable-next-line prettier/prettier -->
      <input type="text" :readonly="true" :value="this.task.title" placeholder="Input title" />
    </div>
    <div class="actions">
      <a @click="$emit('pinTask', task.id)" v-if="!isChecked">
        <span class="icon-star" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "task",
  props: {
    task: {
      type: Object,
      required: true,
      default: () => ({
        id: "",
        state: "",
        title: ""
      })
    }
  },
  computed: {
    taskClass() {
      return `list-item ${this.task.state}`;
    },
    isChecked() {
      return this.task.state === "TASK_ARCHIVED";
    }
  }
};
</script>
