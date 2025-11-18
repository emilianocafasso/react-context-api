import { createContext, useState } from "react";

export const BudgetContext = createContext()

export default function BudgetProvider({ children }) {

    const [budgetMode, setBudgetMode] = useState(false)
}

const value = {
    budgetMode,
    setBudgetMode
}

return (
    <BudgetContext.Provider value={value}>
        {children}
    </BudgetContext.Provider>
)