import React from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';
import { useField, useFormikContext } from 'formik';

const options = [
  { value: '1620', label: 'Республика Марий Эл' },
  { value: '1624', label: 'Республика Татарстан' },
  { value: '1646', label: 'Удмуртская Республика' },
  { value: '1652', label: 'Чувашская Республика' },
  { value: '1192', label: 'Забайкальский край' },
  { value: '1124', label: 'Иркутская область' },
  { value: '1146', label: 'Красноярский край' },
  { value: '1118', label: 'Республика Бурятия' },
  { value: '1174', label: 'Республика Саха (Якутия)' },
  { value: '1169', label: 'Республика Тыва' },
  { value: '1187', label: 'Республика Хакасия' },
  { value: '1661', label: 'Кировская область' },
  { value: '1679', label: 'Нижегородская область' },
  { value: '1704', label: 'Рязанская область' },
  { value: '1217', label: 'Алтайский край' },
  { value: '1229', label: 'Кемеровская область' },
  { value: '1202', label: 'Новосибирская область' },
  { value: '1249', label: 'Омская область' },
  { value: '1216', label: 'Республика Алтай' },
  { value: '1255', label: 'Томская область' },
  { value: '2019', label: 'Московская область' },
  { value: '1932', label: 'Амурская область' },
  { value: '1943', label: 'Камчатский край' },
  { value: '1946', label: 'Магаданская область' },
  { value: '1948', label: 'Приморский край' },
  { value: '1960', label: 'Сахалинская область' },
  { value: '1975', label: 'Хабаровский край' },
  { value: '1008', label: 'Архангельская область' },
  { value: '1020', label: 'Калининградская область' },
  { value: '145', label: 'Ленинградская область' },
  { value: '1061', label: 'Мурманская область' },
  { value: '1985', label: 'Ненецкий АО' },
  { value: '1051', label: 'Новгородская область' },
  { value: '1090', label: 'Псковская область' },
  { value: '1077', label: 'Республика Карелия' },
  { value: '1041', label: 'Республика Коми' },
  { value: '1103', label: 'Смоленская область' },
  { value: '1716', label: 'Владимирская область' },
  { value: '1739', label: 'Вологодская область' },
  { value: '1754', label: 'Ивановская область' },
  { value: '1771', label: 'Костромская область' },
  { value: '1783', label: 'Тверская область' },
  { value: '1806', label: 'Ярославская область' },
  { value: '1563', label: 'Оренбургская область' },
  { value: '1575', label: 'Пензенская область' },
  { value: '1556', label: 'Республика Мордовия' },
  { value: '1586', label: 'Самарская область' },
  { value: '1596', label: 'Саратовская область' },
  { value: '1614', label: 'Ульяновская область' },
  { value: '1308', label: "Курганская область" },
  { value: '1317', label: "Пермский край" },
  { value: '1347', label: "Республика Башкортостан" },
  { value: '1261', label: "Свердловская область" },
  { value: '1342', label: "Тюменская область" },
  { value: '1368', label: "Ханты-Мансийский АО - Югра" },
  { value: '1384', label: "Челябинская область" },
  { value: '1414', label: "Ямало-Ненецкий АО" },
  { value: '1463', label: "Кабардино-Балкарская республика" },
  { value: '1471', label: "Карачаево-Черкесская Республика" },
  { value: '1438', label: "Краснодарский край" },
  { value: '1422', label: "Республика Адыгея" },
  { value: '1424', label: "Республика Дагестан" },
  { value: '1434', label: "Республика Ингушетия" },
  { value: '1475', label: "Республика Северная Осетия-Алания" },
  { value: '1481', label: "Ставропольский край" },
  { value: '1500', label: "Чеченская республика" },
  { value: '1817', label: "Белгородская область" },
  { value: '1828', label: "Брянская область" },
  { value: '1844', label: "Воронежская область" },
  { value: '1859', label: "Калужская область" },
  { value: '1880', label: "Курская область" },
  { value: '1890', label: "Липецкая область" },
  { value: '1898', label: "Орловская область" },
  { value: '1905', label: "Тамбовская область" },
  { value: '1913', label: "Тульская область" },
  { value: '1505', label: "Астраханская область" },
  { value: '2114', label: "Республика Крым" },
  { value: '1511', label: "Волгоградская область" },
  { value: '1553', label: "Республика Калмыкия" },
  { value: '1530', label: "Ростовская область" },
];

const FormikAutocomplete = (props: any) => {
  const { name, textfieldprops } = props;
  const { isSubmitting } = useFormikContext();
  const [field, meta, helpers] = useField(name);

  const showError = meta.touched && !!meta.error;

  return (
    <Autocomplete
      freeSolo
      disabled={isSubmitting}
      options={options}
      getOptionLabel={(options) => options.label}
      {...field}
      onChange={(_, date) => {
        helpers.setValue(date || '');
      }}
      onBlur={() => helpers.setTouched(true)}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{ ...params.inputProps }}
          {...textfieldprops}
          error={showError}
          helperText={meta.error}
        />
      )}
    />
  );
};

export default FormikAutocomplete;
