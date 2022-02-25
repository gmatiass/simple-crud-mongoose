export const validatorHandler = (err: string) => {
  const errors = err.substring(err.indexOf(':') + 1).trim();
  const errorsArray = errors.split(',').map(errors => errors.trim());
  const handler = new Map<string, string>();

  errorsArray.forEach((error: string) => {
    const [key, value] = error.split(':').map(error => error.trim());

    handler.set(key, value);
  });

  return Object.fromEntries(handler);
};
