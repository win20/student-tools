import { createContext, useState, Dispatch, SetStateAction } from 'react';

export type User = {
	name: string;
	email: string;
};

export interface UserContextInterface {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
}

const defaultState = {
	query: '',
	setQuery: (query: string) => {},
} as UserContextInterface;

export const UserContext = createContext<UserContextInterface>(defaultState);

type UserProviderProps = {
	children: React.ReactNode;
};

export default function UserProvider({ children }: UserProviderProps) {
	const [query, setQuery] = useState<string>('');

	return (
		<UserContext.Provider value={{ query, setQuery }}>
			{children}
		</UserContext.Provider>
	);
}
