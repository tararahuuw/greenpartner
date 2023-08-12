module.exports = (sequelize, DataTypes) => {
    const Pohon = sequelize.define('Pohon', {
        nomor_pohon: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nama_spesies: {
            type: DataTypes.STRING,
            allowNull: false
        },
        keliling: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        plot: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        luas: {
            type: DataTypes.FLOAT,
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'pohon'
    });

    return Pohon;
}