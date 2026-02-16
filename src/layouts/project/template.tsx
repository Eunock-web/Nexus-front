import type { ReactNode } from "react"

interface TemplateInterface {
    className?: string
    title: string
    description: string
    icon?: ReactNode
    iconColor: string
    iconBackground: string
    isSelected?: boolean
    onClick?: () => void
}

function Template({ title, description, icon, iconColor, iconBackground, isSelected, onClick, className }: TemplateInterface) {
    return (
        <div
            onClick={onClick}
            className={`
                cursor-pointer group transition-all duration-300
                ${className || ''}
            `}
        >
            <div className={`
                bg-[#0c0c31] border rounded-xl p-4 
                transition-all duration-300
                ${isSelected
                    ? 'border-purple-500 ring-2 ring-purple-500/30'
                    : 'border-gray-800 hover:border-gray-700'
                }
            `}>
                <div className="flex items-start gap-3 mb-3">
                    <div
                        className="p-2 rounded-lg shrink-0"
                        style={{
                            backgroundColor: iconBackground,
                            color: iconColor
                        }}
                    >
                        {icon}
                    </div>

                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-white mb-1 truncate">
                            {title}
                        </h3>
                        <p className="text-xs text-gray-400 line-clamp-2">
                            {description}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-end ">
                    <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => { }}
                        className="w-5 h-5 rounded-full  border-gray-600 bg-gray-800 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer "
                    />
                </div>
            </div>
        </div>
    )
}

export default Template