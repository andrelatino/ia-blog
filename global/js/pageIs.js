function pageIs(data) {
    const extensionesBuscadas = ['.home', '.page', '.widget', '.scripts'];
    for (const archivo of data) {
      const nombreArchivo = archivo.name;
      for (const extension of extensionesBuscadas) {
        if (nombreArchivo.endsWith(extension)) {
          return extension;
        }
      }
    }
    return null;
}