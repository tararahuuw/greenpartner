module.exports = (sequelize, DataTypes) => {
    const IndeksKeanekaragamanHayati = sequelize.define('IndeksKeanekaragamanHayati', {
        nomor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        nama_spesies: {
            type: DataTypes.STRING,
            allowNull: true
        },
        famili: {
            type: DataTypes.STRING,
            allowNull: true
        },
        jumlah: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tahun: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }, {
        tableName: 'indeks_keanekaragaman_hayati'
    });

    return IndeksKeanekaragamanHayati;
}