import { setTimeout } from "timers/promises";
import AddEndpoint from "./_components/AddEndPoints";

export default async function Dashboard() {
    await setTimeout(5000);
    return <div>
        <AddEndpoint />
    </div>
  }