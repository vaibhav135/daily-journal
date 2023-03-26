// Button
const ButtonVariants = {
	Primary: 'primary',
	Secondary: 'secondary',
	Link: 'link',
} as const

export type ButtonVariantTypes =
	typeof ButtonVariants[keyof typeof ButtonVariants]

// Input
