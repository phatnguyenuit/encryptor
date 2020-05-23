import { useState, useCallback, ChangeEvent } from 'react';

import crypto from 'crypto';

export const ALGORITHMS = crypto.getCiphers();
const defaultAlgorithm = 'aes-256-cbc';

const useEncryptionForm = () => {
  const [algorithm, setAlgorithm] = useState(defaultAlgorithm);
	const [password, setPassword] = useState('');
	const [text, setText] = useState('');

	const handleChangeAlgorithm = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
		setAlgorithm(e.target.value);
	}, []);

	const handleChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	}, []);

	const handleChangeText = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	}, []);
  return {
    algorithm,
    password,
    text,
    handleChangeAlgorithm,
    handleChangePassword,
    handleChangeText,
  }
}

export default useEncryptionForm;
