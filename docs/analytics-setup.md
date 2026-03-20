# Analytics y píxeles (GTM)

El sitio carga **Google Tag Manager** con el ID configurado en `NEXT_PUBLIC_GTM_ID` (por defecto `GTM-M55CQZNG`).

## Google Analytics 4 (GA4)

1. En [Google Tag Manager](https://tagmanager.google.com/), abre el contenedor `GTM-M55CQZNG`.
2. **Tags → New → Google Analytics: GA4 Configuration** (o **GA4 Event** según necesites).
3. Introduce tu **Measurement ID** (`G-XXXXXXXXXX`) de GA4.
4. **Trigger**: *All Pages* (o el que corresponda).
5. **Submit** y publica el contenedor.

No hace falta añadir `gtag.js` a mano en el código si todo va por GTM.

## Píxeles (Meta, etc.)

1. En GTM: **Tags → New**.
2. Elige la plantilla de **Facebook Pixel** (Community Gallery) o **Custom HTML** con el código del pixel.
3. Asigna el **trigger** adecuado (p. ej. *All Pages* o eventos específicos).
4. Publica el contenedor.

## Entorno local / producción

Copia `.env.example` a `.env.local` y ajusta si usas otro contenedor:

```env
NEXT_PUBLIC_GTM_ID=GTM-M55CQZNG
```

## Verificación

- **GTM Preview** (modo vista previa) para ver tags disparados.
- Extensión **Tag Assistant** o consola de red (`gtm.js`, `collect` de GA4).
