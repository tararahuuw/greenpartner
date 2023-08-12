module.exports = (sequelize, DataTypes) => {
    const Pancang = sequelize.define('Pancang', {
        nomor_pohon: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nama_spesies: {
            type: DataTypes.TEXT("long"),
            allowNull: false
        },
        keliling: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        plot: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        luas: {
            type: DataTypes.FLOAT
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'pancang'
    });

    return Pancang;
}