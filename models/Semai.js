module.exports = (sequelize, DataTypes) => {
    const Semai = sequelize.define('Semai', {
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
        jumlah_ind: {
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
        tableName: 'semai'
    });

    return Semai;
}