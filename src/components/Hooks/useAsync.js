import { useState } from "react";

export default function useAsync(asyncFunction) {
	const [isRequested, setIsRequested] = useState(false);
	const [error, setError] = useState(null);

	const useAsyncManager = async (...items) => {
		try {
			setError(null);
			setIsRequested(true);
			return await asyncFunction(...items);
		} catch (error) {
			setError(error);
			return;
		} finally {
			setIsRequested(false);
		}
	};

	return [isRequested, error, useAsyncManager];
}
