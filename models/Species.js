module.exports = (sequelize, DataTypes) => {
    const Species = sequelize.define('Species', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nama_lokal: {
            type: DataTypes.STRING
        },
        nama_spesies: {
            type: DataTypes.STRING
        },
        status_konservasi: {
            type: DataTypes.STRING
        },
        taksonomi: {
            type: DataTypes.TEXT("long")
        },
        karakteristik_vegetatif: {
            type: DataTypes.TEXT("long")
        },
        karakteristik_generatif: {
            type: DataTypes.TEXT("long")
        },
        jumlah_populasi_individu: {
            type: DataTypes.DECIMAL
        },
        sebaran: {
            type: DataTypes.INTEGER
        },
        fun_fact: {
            type: DataTypes.TEXT("long")
        },
        link_foto: {
            type: DataTypes.TEXT("long")
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: 'species'
    });

    return Species;
}