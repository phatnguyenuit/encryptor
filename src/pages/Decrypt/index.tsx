import React, { memo, useState, useCallback, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Encryption from 'lib/encryption';
import useEncryptionForm, { ALGORITHMS } from 'hooks/useEncryptionForm';

export const DecryptPageComponent: React.FC = () => {
	const [decryptedText, setDecryptedText] = useState('');
	const {
		algorithm, 
		password, 
		text, 
		handleChangeAlgorithm, 
		handleChangePassword, 
		handleChangeText
	} = useEncryptionForm();

	const handleDecrypt = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			const encryption = new Encryption(algorithm, password);
			const decryptedValue = await encryption.decrypt(Buffer.from(text, 'hex'));
			setDecryptedText(decryptedValue.toString());
		},
		[algorithm, password, text],
	);
	return (
		<div>
			<h1>Decrypt</h1>
			<form action="#" noValidate onSubmit={handleDecrypt}>
				<div className="form-control">
					<label htmlFor="algorithm">Algorithm</label>
					<select required id="algorithm" value={algorithm} onChange={handleChangeAlgorithm}>
						{ALGORITHMS.map((_algorithm) => (
							<option key={_algorithm} value={_algorithm}>
								{_algorithm}
							</option>
						))}
					</select>
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input id="password" 
						value={password} 
						onChange={handleChangePassword} 
						type="password" 
					/>
				</div>
				<div className="form-control">
					<label htmlFor="text">Text to decrypt</label>
					<textarea id="text" value={text} onChange={handleChangeText} rows={3}></textarea>
				</div>
				<div className="form-control">
					<label htmlFor="decryptedText">Decrypted</label>
					<textarea readOnly id="decryptedText" value={decryptedText} rows={3}></textarea>
				</div>
				<div className="form-buttons">
					<button type="submit">Decrypt</button>
					<Link to="/encrypt">Encrypt</Link>
				</div>
			</form>
		</div>
	);
};

const DecryptPage = memo(DecryptPageComponent);
DecryptPage.displayName = 'DecryptPage';

export default DecryptPage;
