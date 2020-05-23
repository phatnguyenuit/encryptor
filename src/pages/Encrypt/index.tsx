import React, { memo, useState, useCallback, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Encryption from 'lib/encryption';
import useEncryptionForm, { ALGORITHMS } from 'hooks/useEncryptionForm';


export const EncryptPageComponent: React.FC = () => {
	const [encryptedText, setEncryptedText] = useState('');
	const { 
		algorithm, 
		password, 
		text, 
		handleChangeAlgorithm, 
		handleChangePassword, 
		handleChangeText 
	} = useEncryptionForm();

	const handleEncrypt = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			const encryption = new Encryption(algorithm, password);
			const encryptedValue = await encryption.encrypt(text);
			setEncryptedText(encryptedValue.toString('hex'));
		},
		[algorithm, password, text],
	);

	return (
		<div>
			<h1>Encrypt</h1>
			<form action="#" noValidate onSubmit={handleEncrypt}>
				<div className="form-control">
					<label htmlFor="algorithm">Algorithm</label>
					<select required 
						id="algorithm" 
						value={algorithm} 
						onChange={handleChangeAlgorithm}
					>
						{ALGORITHMS.map((_algorithm) => (
							<option key={_algorithm} value={_algorithm}>
								{_algorithm}
							</option>
						))}
					</select>
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input id="password" value={password} onChange={handleChangePassword} type="password" />
				</div>
				<div className="form-control">
					<label htmlFor="text">Text to encrypt</label>
					<textarea id="text" value={text} onChange={handleChangeText} rows={3}></textarea>
				</div>
				<div className="form-control">
					<label htmlFor="encryptedText">Encrypted(in HEX)</label>
					<textarea readOnly id="encryptedText" value={encryptedText} rows={3}></textarea>
				</div>
				<div className="form-buttons">
					<button type="submit">Encrypt</button>
					<Link to="/decrypt">Decrypt</Link>
				</div>
			</form>
		</div>
	);
};

const EncryptPage = memo(EncryptPageComponent);
EncryptPage.displayName = 'EncryptPage';

export default EncryptPage;
