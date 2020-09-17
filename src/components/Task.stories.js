import Task from "./Task";

export default {
  title: "Task",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  argTypes: {
    onPinTask: {action: "onPinTask"},
    onArchiveTask: {action: "onArchiveTask"}
  }
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  components: {Task},
  template:
      '<task :task="task" @archiveTask="onArchiveTask" @pinTask="onPinTask" />'
});

// default task state
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "Task_INBOX",
    updated_at: new Date(2019, 0, 1, 9, 0)
  }
};
// pinned task state
export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED"
  }
};
// archived task state
export const Archived = Template.bind({});
Archived.args = {
  ...Default.args.task,
  state: "TASK_ARCHIVED"
};
