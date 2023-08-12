module.exports = (sequelize, DataTypes) => {
    const Perdu = sequelize.define('Perdu', {
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
        kerimbunan: {
            type: DataTypes.DECIMAL,
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
        tableName: 'perdu'
    });

    return Perdu;
}