import { setTimeout } from "timers/promises";
import { DataModelView } from "@/components/data-model-view/dataModelView";

export default async function Dashboard() {
    await setTimeout(5000);
    return <div>
        <DataModelView />
    </div>
  }