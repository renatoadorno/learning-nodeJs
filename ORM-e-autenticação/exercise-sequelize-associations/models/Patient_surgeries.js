'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, _DataTypes) => {
  const PatientSurgeries  = sequelize.define('PatientSurgeries ',
    {},
    { 
      timestamps: false,
      tableName: 'Patient_surgeries'
    },
  );

  PatientSurgeries.associate = (models) => {
    models.Patients.belongsToMany(models.Patients, {
      as: 'patients',
      through: PatientSurgeries,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id',
    });
    models.Surgeries.belongsToMany(models.Surgeries, {
      as: 'surgerie',
      through: PatientSurgeries,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id',
    });
  };

  return PatientSurgeries;
};