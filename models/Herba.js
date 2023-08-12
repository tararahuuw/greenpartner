module.exports = (sequelize, DataTypes) => {
    const Herba = sequelize.define('Herba', {
        nomor: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nama_spesies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        konversi_daubenmire: {
            type: DataTypes.DECIMAL,
        },
        kerimbunan: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        plot: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'herba'
    });

    return Herba;
}