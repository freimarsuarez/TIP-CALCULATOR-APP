import { TotalItem, Button } from "../components"

export const Totals = () => {
    return (
        <div className="bg-Green-900 rounded-[15px] py-6 text-white px-6 lg:w-103.25 lg:flex lg:flex-col lg:justify-between">
            <div>
                <TotalItem text="Tip Amount" value={0} />
                <TotalItem text="Total" value={0} />
            </div>
            <Button text="Reset" />
        </div>
    )
}
