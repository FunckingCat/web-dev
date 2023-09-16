import React, { FC } from 'react';
import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';

import { SectionComponentProps } from 'shared/types';

export const Map: FC<SectionComponentProps> = ({ className, ...props }) => {
  const coordinates = [55.83395, 37.54395];

  return (
    <section className={className} {...props}>
      <YMaps>
        <YMap
          width="100%"
          height="400px"
          defaultState={{
            center: coordinates,
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark
            modules={['geoObject.addon.balloon']}
            defaultGeometry={coordinates}
            properties={{
              balloonContentBody: 'ул. Прянишникова, 2А',
            }}
          />
        </YMap>
      </YMaps>
    </section>
  );
};
