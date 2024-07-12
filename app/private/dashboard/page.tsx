import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const Dashboard = ()=>{
    return(
        <div className="flex min-h-screen">
            <div className="flex-1 bg-gray-100 dark:bg-gray-950">
                <div className="p-6 grid gap-6">
                    <div className="grid md:grid-cols-2 ld:grid-cols-4 gap-6">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$45,231.87</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$45,231.87</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">$45,231.87</div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    +20.1% from last month
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;