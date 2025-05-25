// pages/index.js
import Layout from '@/components/layout/layout';
import TaskList from '@/components/task/taskList';

const tasks = [
  {
    id: 1,
    title: 'Finish UI',
    description: 'Polish the dashboard layout',
    status: 'In Progress',
  },
  {
    id: 2,
    title: 'Connect Backend',
    description: 'Integrate MongoDB',
    status: 'Pending',
  },
];

export default function Home() {
  return (
    <Layout>
      <TaskList tasks={tasks} />
    </Layout>
  );
}
